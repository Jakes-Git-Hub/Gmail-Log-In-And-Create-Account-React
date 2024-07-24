require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);
app.use(cors());

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, 
    max: 100, 
    message: {
      status: 429,
      error: 'Too many requests. Please try again in 30 minutes.'
    },
    keyGenerator: (req) => req.headers['x-forwarded-for'] || req.socket.remoteAddress
});

app.get('/health', (req, res) => res.status(200).send('OK'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Endpoint to get user's IP Address
app.get('/get-user-ip', (request, response) => {
  console.log('Received request for /get-user-ip');
  const forwardedFor = request.headers['x-forwarded-for'];
  if (forwardedFor) {
    const ips = forwardedFor.split(',');
    const userIpAddress = ips[0].trim();
    return response.json({ userIpAddress });
  }
  const userIpAddress = request.socket.remoteAddress || '';
  return response.json({ userIpAddress });
});

// Twilio API Endpoint
const twilioAccountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;

const client = twilio(twilioAccountSid, twilioAuthToken);

// Endpoint to send verification code via SMS
app.post('/send-verification-code', limiter, async (req, res) => {
  console.log('Endpoint reached: /send-verification-code');
  const { formattedPhoneNumber } = req.body;

  // Log the received data
  console.log('Received request with formattedPhoneNumber:', formattedPhoneNumber);

  try {
    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Send SMS using Twilio
    await client.messages.create({
      body: `G-${verificationCode} is your Google verification code.`,
      from: twilioPhoneNumber,
      to: formattedPhoneNumber,
    })
    .then(message => {
      console.log('Twilio API call successful:', message.sid);
      console.log('Verification code:', verificationCode)
      res.json({ 
        sid: message.sid,
        verificationCode: verificationCode,
      });
    })
    .catch(error => {
      console.error('Twilio API call error:', error.response ? error.response.data : error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

  } catch (error) {
    console.error('Error in try-catch block:', error.response ? error.response.data : error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// SendGrid API Endpoint
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.post('/send-verification-email', limiter, async (req, res) => {
  console.log('Endpoint reached: /send-verification-email');
  const { phoneNumberOrEmail } = req.body;

  // Log the received data
  console.log('Received request with email:', phoneNumberOrEmail);

  try {
    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    const msg = {
      to: phoneNumberOrEmail,
      from: 'jacmatthews7@gmail.com',
      subject: 'Verification Code',
      text: `G-${verificationCode} is your Google verification code.`,
    };

    await sgMail.send(msg);

    console.log('Email sent successfully');
    console.log('Verification code:', verificationCode);
    res.json({ 
      verificationCode: verificationCode,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
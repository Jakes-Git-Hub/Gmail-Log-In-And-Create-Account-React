import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';  // Added for parsing request bodies
import twilio from 'twilio';  // Added for Twilio integration

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Added for parsing URL-encoded bodies
app.set('trust proxy', true);
app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Endpoint to get user's IP Address

app.get('/get-user-ip', (request, response) => {
  console.log('Received request for /get-user-ip');
  const userIpAddress = request.socket.remoteAddress || '';
  return response.json({ userIpAddress });
});

// Twilio API Endpoint

console.log(process.env.TWILIO_ACCOUNT_SID);
console.log(process.env.TWILIO_AUTH_TOKEN);
console.log(process.env.TWILIO_PHONE_NUMBER);

// Twilio credentials
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(twilioAccountSid, twilioAuthToken);

// Endpoint to send verification code via SMS
app.post('/send-verification-code', async (req, res) => {
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


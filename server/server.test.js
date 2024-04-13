require('@babel/register')({
  presets: ['@babel/preset-env']
}); 

import request from 'supertest';
import app from './server.mjs'; 
import sgMail from '@sendgrid/mail';
import { client } from './server.mjs';

const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

jest.mock('@sendgrid/mail');

describe('Server endpoints', () => {
  it('should respond with the user IP address', async () => {
    const response = await request(app).get('/get-user-ip');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userIpAddress');
  });

  it('should send a verification code via SMS (mocked)', async () => {
    const mockCreate = jest.fn().mockResolvedValue({ sid: 'some-message-sid' });
    client.messages.create = mockCreate;

    const response = await request(app)
      .post('/send-verification-code')
      .send({ formattedPhoneNumber: '+447720761143' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('verificationCode');
    expect(mockCreate).toHaveBeenCalledWith({
      body: expect.stringContaining('verification code'),
      from: twilioPhoneNumber,
      to: '+447720761143',
    });
  });


  it('should send a verification email (mocked)', async () => {
    const mockSend = jest.fn().mockResolvedValue();
    sgMail.send = mockSend; 

    const response = await request(app)
      .post('/send-verification-email')
      .send({ phoneNumberOrEmail: 'jacmatthews7@gmail.com' }); // Adjust email address as needed

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('verificationCode');
    expect(mockSend).toHaveBeenCalledWith({ // Assert the function was called with expected arguments
      to: 'jacmatthews7@gmail.com',
      from: 'jacmatthews7@gmail.com',
      subject: 'Verification Code',
      text: expect.stringContaining('verification code'),
    });
  });
});

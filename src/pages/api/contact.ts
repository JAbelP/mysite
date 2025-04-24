import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, service } = req.body;

    if (!name || !email || !message || !service) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Configure the transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
        port: parseInt(process.env.SMTP_PORT || '587'), // e.g., 587 for TLS
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
      });

      // Email options
      const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.EMAIL_USER, // Your email address to receive the messages
        subject: `New Contact Form Submission: ${service}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}

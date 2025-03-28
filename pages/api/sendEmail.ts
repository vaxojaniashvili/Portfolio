import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userName, email, text } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.EMAIL_PASS,
            },
            debug: true
        });

        try {
            console.log('Attempting to send email...');

            await transporter.sendMail({
                from: `"Contact Form" <${process.env.MY_EMAIL}>`,
                replyTo: email,
                to: process.env.MY_EMAIL,
                subject: `New Contact Form Submission from ${userName}`,
                text: `Message: ${text}\n\nFrom: ${userName} (${email})`,
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                        <h2>New Contact Form Submission</h2>
                        <p><strong>From:</strong> ${userName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <p style="padding: 15px; background-color: #f9f9f9; border-radius: 4px;">${text.replace(/\n/g, '<br>')}</p>
                    </div>
                `
            });

            console.log('Email sent successfully');
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Email sending error:', error);
            res.status(500).json({
                message: 'Failed to send email',
                error,
                details: JSON.stringify(error)
            });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
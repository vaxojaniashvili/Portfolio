import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userName, email, text } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });
        try {
            await transporter.sendMail({
                from: email,
                to: process.env.MY_EMAIL,
                subject: `New Contact Form Submission from ${userName}`,
                text: `Message: ${text}\n\nFrom: ${userName} (${email})`,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

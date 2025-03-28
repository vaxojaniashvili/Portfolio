import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userName, email, text } = req.body;

        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });

        const ses = new AWS.SES({ apiVersion: '2010-12-01' });

        const params: AWS.SES.SendEmailRequest = {
            Source: process.env.AWS_SES_SENDER!,
            Destination: {
                ToAddresses: [process.env.MY_EMAIL!]
            },
            ReplyToAddresses: [email],
            Message: {
                Subject: {
                    Data: `New Contact Form Submission from ${userName}`
                },
                Body: {
                    Text: {
                        Data: `Message: ${text}\n\nFrom: ${userName} (${email})`
                    }
                }
            }
        };

        try {
            // Explicitly type the result
            const result = await ses.sendEmail(params).promise();
            console.log('SES email sent successfully:', result);
            res.status(200).json({ message: 'Email sent successfully', messageId: result.MessageId });
        } catch (error) {
            console.error('SES error details:', error);
            res.status(500).json({ message: 'Failed to send email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
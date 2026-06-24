import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildHtml = (userName: string, email: string, text: string) => `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#f4f4f7; padding:32px;">
    <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,0.06);">
      <div style="background:linear-gradient(135deg,#7843E9,#9d5cff); padding:28px 32px;">
        <h1 style="margin:0; color:#ffffff; font-size:20px; letter-spacing:0.5px;">New portfolio message</h1>
        <p style="margin:6px 0 0; color:rgba(255,255,255,0.85); font-size:14px;">Someone reached out through your website</p>
      </div>
      <div style="padding:28px 32px;">
        <p style="margin:0 0 4px; color:#8a8a99; font-size:12px; text-transform:uppercase; letter-spacing:1px;">From</p>
        <p style="margin:0 0 18px; color:#1a1a1f; font-size:16px; font-weight:600;">${escapeHtml(userName)} &lt;${escapeHtml(email)}&gt;</p>
        <p style="margin:0 0 4px; color:#8a8a99; font-size:12px; text-transform:uppercase; letter-spacing:1px;">Message</p>
        <div style="margin:0; padding:16px 18px; background:#f4f4f7; border-radius:12px; color:#33333d; font-size:15px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(text)}</div>
      </div>
      <div style="padding:16px 32px; background:#fafafc; border-top:1px solid #eee;">
        <p style="margin:0; color:#a0a0ad; font-size:12px;">Reply directly to this email to respond to ${escapeHtml(userName)}.</p>
      </div>
    </div>
  </div>
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userName, email, text } = req.body ?? {};

  // Server-side validation (never trust the client)
  if (
    typeof userName !== "string" ||
    typeof email !== "string" ||
    typeof text !== "string"
  ) {
    return res.status(400).json({ message: "Invalid request payload." });
  }

  const trimmedName = userName.trim();
  const trimmedEmail = email.trim();
  const trimmedText = text.trim();

  if (trimmedName.length < 2) {
    return res.status(400).json({ message: "Please provide your name." });
  }
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address." });
  }
  if (trimmedText.length < 10) {
    return res
      .status(400)
      .json({ message: "Message must be at least 10 characters long." });
  }
  if (trimmedText.length > 5000) {
    return res.status(400).json({ message: "Message is too long." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.MY_EMAIL) {
    console.error(
      "Missing email configuration: set RESEND_API_KEY and MY_EMAIL."
    );
    return res
      .status(500)
      .json({ message: "Email service is not configured." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      // EMAIL_FROM must be a verified Resend domain, e.g. "Portfolio <contact@yourdomain.com>".
      // Falls back to Resend's shared testing address so it works out of the box.
      from: process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>",
      to: [process.env.MY_EMAIL],
      replyTo: trimmedEmail,
      subject: `New contact form submission from ${trimmedName}`,
      html: buildHtml(trimmedName, trimmedEmail, trimmedText),
      text: `Message: ${trimmedText}\n\nFrom: ${trimmedName} (${trimmedEmail})`,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(502)
        .json({ message: "Failed to send email. Please try again later." });
    }

    return res
      .status(200)
      .json({ message: "Email sent successfully", id: data?.id });
  } catch (error) {
    console.error("Unexpected email error:", error);
    return res
      .status(500)
      .json({ message: "Failed to send email. Please try again later." });
  }
}

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    // Form မှ ဒေတာများ ဆွဲထုတ်ခြင်း
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Required fields are missing." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "East Wind Website <info@eastwindmyanmar.com.mm>",
            to: ["mglinkar08@gmail.com", "support@eastwindmyanmar.com.mm"],
            replyTo: email,
            subject: subject ? `[Website Contact] ${subject}` : `New Message from ${name}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error: unknown) {
        console.error("Email Sending Error:", error);
        return { success: false, error: "Failed to send email." };
    }
}
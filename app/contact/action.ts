"use server";

import { Resend } from "resend";

// 💡 Return ပြန်မည့် Data ပုံစံကို တိကျစွာ ကြေညာထားပါသည်
export interface EmailResponse {
    success: boolean;
    error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData): Promise<EmailResponse> {
    // Form မှ ဒေတာများ ဆွဲထုတ်ခြင်း
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;

    // ၁။ လိုအပ်သော အချက်အလက်များ ပြည့်စုံမှု ရှိ/မရှိ စစ်ဆေးခြင်း
    if (!name || !email || !message) {
        return { success: false, error: "Required fields are missing." };
    }

    // ၂။ Email ပုံစံ မှန်/မမှန် စစ်ဆေးခြင်း (Validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    // ၃။ သပ်ရပ်သော Enterprise HTML Template တည်ဆောက်ခြင်း
    const htmlTemplate = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden;">
      
      <!-- Header Section -->
      <div style="background-color: #111827; padding: 24px; text-align: center;">
        <h2 style="color: #FFFFFF; margin: 0; font-size: 20px; letter-spacing: 1px; text-transform: uppercase;">EastWind Myanmar</h2>
        <p style="color: #9CA3AF; margin: 8px 0 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Website Inquiry</p>
      </div>
      
      <!-- Body Section -->
      <div style="padding: 32px; background-color: #FFFFFF;">
        <p style="margin: 0 0 16px 0; color: #374151; font-size: 14px;">
          <strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #2563EB;">${email}</a>)
        </p>
        <p style="margin: 0 0 24px 0; color: #374151; font-size: 14px;">
          <strong>Subject:</strong> ${subject || "No Subject Provided"}
        </p>
        
        <!-- Message Box -->
        <div style="background-color: #F9FAFB; padding: 20px; border-radius: 6px; border: 1px solid #F3F4F6;">
          <p style="margin: 0; color: #4B5563; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <!-- Footer Section -->
      <div style="background-color: #F3F4F6; padding: 16px; text-align: center; color: #6B7280; font-size: 12px;">
        This email was automatically generated from the East Wind Myanmar Website Contact Form.
      </div>

    </div>
  `;

    try {
        const { error } = await resend.emails.send({
            from: "East Wind Website <info@eastwindmyanmar.com.mm>",
            to: ["info@eastwindmyanmar.com.mm", "support@eastwindmyanmar.com.mm"],
            replyTo: email,
            subject: subject ? `[Website Inquiry] ${subject}` : `New Inquiry from ${name}`,
            html: htmlTemplate,
        });

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error: unknown) {
        console.error("Email Sending Error:", error);

        // 💡 Error Type အား သေချာစွာ စစ်ဆေး၍ Message ထုတ်ပေးခြင်း
        const errorMessage =
            error instanceof Error ? error.message : "An unexpected error occurred.";

        return { success: false, error: errorMessage };
    }
}
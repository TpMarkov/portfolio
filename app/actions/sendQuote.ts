"use server";

import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteAction(formData: FormData) {
    const email = formData.get("email") as string;
    const description = formData.get("project_description") as string;
    const additional = formData.get("additional_information") as string;

    if (!email || !description) {
        return { success: false, error: "Missing required fields" };
    }

    try {
        // 1. Send Notification to webdevstudioHQ
        const notification = await resend.emails.send({
            from: "webdevstudioHQ <onboarding@resend.dev>",
            to: "webdevstudiohq@gmail.com",
            subject: "NEW Project Quote Request",
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0b5ed7;">New Quote Request</h2>
          <p><strong>Sender Email:</strong> ${email}</p>
          <p><strong>Project Description:</strong></p>
          <div style="background: #f4f6f8; padding: 15px; border-radius: 5px;">${description}</div>
          ${additional ? `<p><strong>Additional Info:</strong></p><div style="background: #f4f6f8; padding: 15px; border-radius: 5px;">${additional}</div>` : ""}
        </div>
      `,
        });

        if (notification.error) {
            console.error("Notification Email Error:", notification.error);
        }

        // 2. Read HTML Template for Auto-Reply
        const templatePath = path.join(process.cwd(), "app/constants/auto-reply-email-template.html");
        const htmlTemplate = await fs.readFile(templatePath, "utf-8");

        // 3. Send Auto-Reply to Customer
        const autoReply = await resend.emails.send({
            from: "webdevstudioHQ Portfolio <onboarding@resend.dev>",
            to: email,
            subject: "We’ve Received Your Request | webdevstudioHQ",
            html: htmlTemplate,
        });

        if (autoReply.error) {
            console.error("Auto-Reply Email Error:", autoReply.error);
            // If the error is specifically that we're in trial/onboarding mode, it won't throw, 
            // but the email won't be sent to unverified addresses.
            return { success: false, error: autoReply.error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Action Exception:", error);
        return { success: false, error: "System failed to process the request" };
    }
}

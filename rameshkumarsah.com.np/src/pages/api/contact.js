// src/pages/api/contact.ts
import nodemailer from "nodemailer";

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const subject = data.get("subject");
    const message = data.get("message");

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }), 
        { status: 400 }
      );
    }

    // Gmail SMTP transporter with hardcoded credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rsah3798@gmail.com",
        pass: "wuwpyqqrrnlmiyhl",
      },
    });

    const mailOptions = {
      from: email,
      to: "rsah3798@gmail.com",
      subject: `New Contact from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px; vertical-align: top;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">This message was sent from your website contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }), 
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }), 
      { status: 500 }
    );
  }
}
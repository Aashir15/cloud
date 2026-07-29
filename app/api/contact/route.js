import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !service?.trim() ||
      !message?.trim()
    ) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    if (phone.trim().length < 7) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid phone number",
        },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS");

      return Response.json(
        {
          success: false,
          message: "Email server is not configured",
        },
        { status: 500 }
      );
    }

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.titan.email",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: process.env.EMAIL_USER,
    //         pass: process.env.EMAIL_PASS,
    //     },
    // });

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // This gives a clearer SMTP error before sendMail
    await transporter.verify();

    const mailInfo = await transporter.sendMail({
      from: `"Cloud Minds Tech Website" <${process.env.EMAIL_USER}>`,

      // Send directly to Gmail for testing.
      // After testing, CONTACT_EMAIL can be your ImprovMX alias.
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,

      replyTo: email,
      subject: `New ${service} Inquiry from ${name}`,

      text: `
New Contact Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
            `,

      html: `
                <div style="font-family:Arial,sans-serif;padding:30px;background:#f8f9fa">
                    <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eeeeee">
                        <h2 style="margin:0 0 20px;color:#111827">
                            New Contact Inquiry
                        </h2>

                        <table style="width:100%;border-collapse:collapse">
                            <tr>
                                <td style="padding:10px 0;font-weight:bold;width:140px">
                                    Name
                                </td>
                                <td>${escapeHtml(name)}</td>
                            </tr>

                            <tr>
                                <td style="padding:10px 0;font-weight:bold">
                                    Email
                                </td>
                                <td>
                                    <a href="mailto:${escapeHtml(email)}">
                                        ${escapeHtml(email)}
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:10px 0;font-weight:bold">
                                    Phone
                                </td>
                                <td>${escapeHtml(phone)}</td>
                            </tr>

                            <tr>
                                <td style="padding:10px 0;font-weight:bold">
                                    Service
                                </td>
                                <td>${escapeHtml(service)}</td>
                            </tr>
                        </table>

                        <hr style="margin:25px 0;border:none;border-top:1px solid #eeeeee" />

                        <h3 style="margin-bottom:10px;color:#111827">
                            Message
                        </h3>

                        <div style="background:#f9fafb;padding:16px;border-radius:8px;line-height:1.7;color:#374151">
                            ${escapeHtml(message).replace(/\n/g, "<br />")}
                        </div>
                    </div>
                </div>
            `,
    });

    console.log("Email sent:", mailInfo.messageId);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form email error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });

    return Response.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong while sending the email",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
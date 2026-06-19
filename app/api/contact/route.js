import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        if (
            !body.name?.trim() ||
            !body.email?.trim() ||
            !body.phone?.trim() ||
            !body.service?.trim() ||
            !body.message?.trim()
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

        if (!emailRegex.test(body.email)) {
            return Response.json(
                {
                    success: false,
                    message: "Please enter a valid email address",
                },
                { status: 400 }
            );
        }

        if (body.phone.trim().length < 7) {
            return Response.json(
                {
                    success: false,
                    message: "Please enter a valid phone number",
                },
                { status: 400 }
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
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Cloud Minds Tech" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: body.email,
            subject: `New ${body.service} Inquiry from ${body.name}`,
            html: `
        <div style="font-family:Arial,sans-serif;padding:30px;background:#f8f9fa;">
          <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;padding:30px;border:1px solid #eee;">
            
            <h2 style="margin:0 0 20px;color:#111827;">
              New Contact Inquiry
            </h2>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-weight:bold;width:140px;">Name</td>
                <td>${body.name}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">Email</td>
                <td>
                  <a href="mailto:${body.email}">
                    ${body.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">Phone</td>
                <td>
                  <a href="tel:${body.phone}">
                    ${body.phone}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold;">Service</td>
                <td>${body.service}</td>
              </tr>
            </table>

            <hr style="margin:25px 0;border:none;border-top:1px solid #eee;" />

            <h3 style="margin-bottom:10px;color:#111827;">
              Message
            </h3>

            <div style="background:#f9fafb;padding:16px;border-radius:8px;line-height:1.7;color:#374151;">
              ${body.message.replace(/\n/g, "<br/>")}
            </div>

          </div>
        </div>
      `,
        });

        return Response.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong while sending the email",
            },
            { status: 500 }
        );
    }
}
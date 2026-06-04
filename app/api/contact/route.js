import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Cloud Minds Tech" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: body.email,
            subject: `New Inquiry from ${body.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="margin-bottom: 20px;">
                New Inquiry
            </h2>

            <p>
                <strong>Name:</strong> ${body.name}
            </p>

            <p>
                <strong>Email:</strong>
                <a href="mailto:${body.email}">
                    ${body.email}
                </a>
            </p>

            <p>
                <strong>Website:</strong> ${body.website}
            </p>

            <p>
                <strong>Message:</strong>
            </p>

            <p>
                ${body.message}
            </p>
        </div>
    `,
        });

        return Response.json({
            success: true,
        });

    } catch (error) {
        console.log(error);

        return Response.json(
            {
                success: false,
            },
            { status: 500 }
        );
    }
}
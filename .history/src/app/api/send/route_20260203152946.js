import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY || !fromEmail) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const toEmail = "thiobista0gedefaw@gmail.com";

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message submitted from portfolio contact form:</p>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(
      { success: true, id: data?.id ?? null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

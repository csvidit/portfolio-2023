import EmailTemplate from "@/components/ContactForm/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    const response = await resend.emails.send({
      from: `Portfolio Contact Form <${process.env
        .CONTACT_EMAILS_SENDER!}>`,
      to: process.env.CONTACT_EMAILS_RECIPIENT!,
      subject: `New Submission - ${name}`,
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ response, status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
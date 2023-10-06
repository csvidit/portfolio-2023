import EmailTemplate from "@/components/ContactForm/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

  const {name, email, message} = await request.json();

  resend.emails
    .send({
      from: `Portfolio Contact Form <${process.env
        .CONTACT_EMAILS_SENDER!}>`,
      to: process.env.CONTACT_EMAILS_RECIPIENT!,
      subject: `New Submission - ${name}`,
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    })
    .then((res) => {
      console.log(res);
      return NextResponse.json(res);
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.error().json();
    })

  return NextResponse.json({ message: "success" });
}

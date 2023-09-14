import { NextRequest, NextResponse } from "next/server";

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const POST = async (req: NextRequest) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Vidit Khandelwal Portfolio <${process.env.CONTACT_FORM_SENDER_EMAIL}>`,
      to: [`${process.env.CONTACT_FORM_RECEIVER_EMAIL}`],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
};

// resend.emails.send({
//   from: process.env.CONTACT_EMAILS_SENDER!,
//   to: process.env.CONTACT_EMAILS_RECIPIENT!,
//   subject: "Hello World",
//   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });

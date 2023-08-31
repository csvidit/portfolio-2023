import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { sesClient } from "@/aws.config";
import { SendEmailCommand } from "@aws-sdk/client-ses";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method != "POST") {
    return response.status(405).end();
  } else {
    const form = new formidable.IncomingForm({
      maxFieldsSize: 10 * 1024 * 1024, // 10 MB
    });

    let formData: ContactFormData = {
      name: "" as string,
      email: "" as string,
      message: "" as string,
    };

    form.on("field", (name, value: string) => {
      formData[name as keyof ContactFormData] = value;
    });

    form.on("error", (err) => {
      console.error("Form parsing error:", err);
      response.status(500).json({ error: "Form Parsing Server error." });
    });

    form.parse(request, async (err, fields) => {
      console.log("Parsing Form Data");
      if (err) {
        console.error(err);
        response.status(500).json({ error: "Unable to process form data" });
        return;
      }
      const name = fields.name;
      const email = fields.email;
      const message = fields.message;

      const emailSubject = `Contact Form Submission from ${name}`;
      const emailBody = `<p>New contact form submission from Vidit Khandelwal Portfolio</p><br><br><p>Name: ${name}</p><p>Email Address: ${email}</p><p>Message: ${message}</p>`;

      const sendEmailCommand = createSendEmailCommand(emailSubject, emailBody);

      try {
        return await sesClient.send(sendEmailCommand);
      } catch (e) {
        response.status(500).json("Unable to send email. Internal Server Error.")
        console.error("Failed to send email.");
        return e;
      }
    });
  }
}

const createSendEmailCommand = (emailSubject: string, emailBody: string) => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [
      ],
      ToAddresses: [
        process.env.CONTACT_FORM_RECEIVER_EMAIL,
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: "",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: emailSubject,
      },
    },
    Source: process.env.CONTACT_FORM_SENDER_EMAIL,
    ReplyToAddresses: [
    ],
  });
};

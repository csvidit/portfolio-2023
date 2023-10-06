interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <div className="text-neutral-900">
      <h1 className="text-xl lg:text-2xl text-indigo-500 font-medium">
        Vidit Khandelwal Portfolio
      </h1>
      <div className="text-neutral-900 text-lg lg:text-xl">
        New Contact Form Submission from {name}
      </div>
      <hr></hr>
      <div className="text-base">{message}</div>
      <hr></hr>
      <a href={`mailto:${email}`} className="font-bold">
        Reply to {email}
      </a>
      <p className="text-xs text-neutral-500">
        Confidential, intended for Vidit Khandelwal only. &copy; 2023 Vidit
        Khandelwal Contact Form.
      </p>
    </div>
  );
};

export default EmailTemplate;

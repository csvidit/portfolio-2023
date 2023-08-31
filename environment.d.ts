declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      CONTACT_FORM_SENDER_EMAIL: string;
      CONTACT_FORM_RECEIVER_EMAIL: string;
    }
  }
}

export {}
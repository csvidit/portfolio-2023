import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

export const metadata = {
  title: "Work Experience - Vidit Khandelwal",
  description:
    "Vidit Khandelwal's past work experience in tech industry and on-campus internships. He is a recent computer science and economics graduate of DePauw University. Open to work, and based in the United States",
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
  applicationName: "Vidit Khandelwal Portfolio",
  keywords: [
    "Vidit Khandelwal",
    "Vidit",
    "DePauw",
    "DePauw University",
    "DPU",
    "Indianapolis",
    "Computer Science",
    "graduate",
    "entry level",
    "CS",
    "CSE",
    "software engineer",
    "web developer",
    "UI Engineer",
    "Economics",
    "Oxford",
    "ICSA",
    "Pixus, Inc.",
    "Pixus",
    "CaptureNoire",
    "resume",
    "work",
    "employment",
    "read.cv",
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description:
      "Vidit Khandelwal's past work experience in tech industry and on-campus internships.",
    url: "https://viditkhandelwal.com",
    siteName: "Vidit Khandelwal Portfolio",
    images: [
      {
        url: "https://viditkhandelwal.com/portfolio-og.png",
        alt: "Vidit Khandelwal, Software Engineer, in text on a gradient background",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>{children}</section>
  );
}

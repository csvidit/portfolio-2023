import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

export const metadata = {
  title: "Projects - Vidit Khandelwal",
  description:
    "Recent open-source and closed-source development projects by Vidit Khandelwal. He is a recent computer science and economics graduate of DePauw University. Open to work, and based in the United States",
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
    "Squawk Social",
    "Xzayvian GPT",
    "ChatGPT",
    "OpenAI",
    "Snapshot",
    "TypeScript",
    "Supabase",
    "Vercel",
    "React",
    "Next.js",
    "Auth0",
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "Recent open-source and closed-source development projects by Vidit Khandelwal",
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
      <section>{children}<Analytics/></section>
  );
}

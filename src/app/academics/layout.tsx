import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

export const metadata = {
  title: "Academics - Vidit Khandelwal",
  description:
    "Vidit Khandelwal's is a recent computer science and economics graduate of DePauw University. He also studied for a semester at New College, University of Oxford, concentrating in International Economics. Open to work, and based in the United States",
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
    "software development",
    "web development",
    "academics",
    "web developer",
    "Economics",
    "Oxford",
    "economics",
    "business",
    "awards",
    "honors",
    "scholarship",
    "gpa",
    "merit",
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description:
      "Vidit Khandelwal's is a recent computer science and economics graduate of DePauw University.",
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

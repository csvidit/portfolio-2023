import "../globals.css"
import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav/Nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Papers - Vidit Khandelwal",
  description:
    "Select academic papers written Vidit Khandelwal in Economics, Sociology, Gender Studies, and Ethics. He is a recent computer science and economics graduate of DePauw University. Open to work, and based in the United States",
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
    "International",
    "Business",
    "Economist",
    "finance",
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "Select academic papers written by Vidit Khandelwal",
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
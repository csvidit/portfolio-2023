import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav/Nav";
import "../globals.css";

export const metadata = {
  title: "Vidit Khandelwal",
  description:
    "The official portfolio of Vidit Khandelwal. Recent computer science and economics graduate of DePauw University. Software engineer, Web Developer, UI Engineer. Open to work, and based in the United States",
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
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "The official portfolio of Vidit Khandelwal.",
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
  return <section>{children}</section>;
}

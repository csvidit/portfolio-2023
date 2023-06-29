import "../globals.css";

export const metadata = {
  title: "Vidit Khandelwal - Work Experience",
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
    "read.cv"
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "Vidit Khandelwal's past work experience in tech industry and on-campus internships.",
    url: "https://viditkhandelwal.com",
    siteName: "Vidit Khandelwal Portfolio",
    images: [
      {
        url: "https://viditkhandelwal.com/2-opengraph-square.png",
        alt: "VK initials text on a gradient background",
        width: 1001,
        height: 1001
      },
      {
        url: "https://viditkhandelwal.com/2-opengraph-wide.png",
        alt: "Vidit Khandelwal, Software Engineer, in text on a gradient background",
        width: 1200,
        height: 630
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

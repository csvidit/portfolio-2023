import "../globals.css";

export const metadata = {
  title: "Vidit Khandelwal - About",
  description:
    "Vidit Khandelwal's is a recent computer science and economics graduate of DePauw University. He loves web development, iced lattes, and Midnights by Taylor Swift. Open to work, and based in the United States",
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
    "economics",
    "business",
    "Taylor Swift",
    "Midnights",
    "Lavender Haze",
    "latte",
    "Read.cv"
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "Vidit Khandelwal's is a recent computer science and economics graduate of DePauw University.",
    url: "https://viditkhandelwal.com",
    siteName: "Vidit Khandelwal Portfolio",
    images: [
      {
        url: "https://viditkhandelwal.com/opengraph-image.png",
        alt: "Vidit Khandelwal, Software Engineer, in text with the Vidit Khandelwal Seal",
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

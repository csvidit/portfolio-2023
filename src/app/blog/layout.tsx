import Footer from "@/components/Footer/Footer";
import "../globals.css";
import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav/Nav";
import BlogIntro from "@/components/Blog/BlogIntro";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Blog - Vidit Khandelwal",
  description:
    "Articles on tech and economics by Vidit Khandelwal He is a recent computer science and economics graduate of DePauw University. Open to work, and based in the United States.",
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
    "economics",
    "business",
    "finance",
    "development economics",
    "international economics",
    "finance",
    "graduate",
    "entry level",
    "CS",
    "CSE",
    "software engineer",
    "web developer",
    "UI Engineer",
    "blog",
    "writer",
    "backslash",
    "tech",
    "technology",
    "industry",
    "react",
    "javascript",
    "typescript",
    "python",
    "java",
    "c++",
    "c",
    "c#",
    "html",
    "css",
    "sass",
    "scss",
    "tailwind",
    "tailwindcss",
    "nextjs",
    "next.js",
    "next",
    "gatsby",
    "gatsbyjs",
    "gatsby.js",
    "graphql",
    "apollo",
    "apollo client",
    "apollo server",
    "hygraph",
    "prisma",
    "postgresql",
    "sql",
    "mysql",
    "mongodb",
    "firebase",
    "aws",
    "amazon web services",
    "cloud",
    "cloud computing",
    "cloud engineer",
    "cloud architect",
    "cloud developer",
    "full stack",
    "full stack developer",
    "full stack engineer",
    "front end",
    "front end developer",
    "front end engineer",
    "back end",
    "back end developer",
    "back end engineer",
    "software developer",
    "software engineer",
    "software architect",
    "software development",
    "software engineering",
    "web developer",
    "web development",
    "ui engineer",
    "ui developer",
    "ui design",
    "ux engineer",
    "ux developer",
    "ux design",
    "user experience engineer",
    "user experience developer",
    "user experience design",
    "user interface engineer",
    
  ],
  openGraph: {
    title: "Vidit Khandelwal",
    description: "Articles on software engineering, web development, and the tech industry by Vidit Khandelwal",
    url: "https://viditkhandelwal.com",
    siteName: "Vidit Khandelwal Portfolio",
    images: [
      {
        url: "https://viditkhandelwal.com/2-opengraph-square.png",
        alt: "VK initials text on a gradient background",
        width: 1001,
        height: 1001,
      },
      {
        url: "https://viditkhandelwal.com/2-opengraph-wide.png",
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
    <html lang="en">
      <body>
        <MainContainer>
          <Nav/>
          
        {children}
        <Analytics/>
        {/* <Footer /> */}
        </MainContainer>
      </body>
    </html>
  );
}
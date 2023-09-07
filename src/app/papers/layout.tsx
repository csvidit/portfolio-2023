import Footer from "@/components/Footer/Footer";
import "../globals.css";
import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav/Nav";

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
        {/* <Footer /> */}
        </MainContainer>
      </body>
    </html>
  );
}

 {/* <PapersItem
        title="India's Lag Behind China And Policy Suggestions To Overcome It"
        href="https://overleaf.com"
        tag={1}
      >
        India and China have both come a long way from 1980 to the present in
        terms of economic growth as measured by GDP per capita. Yet the path
        towards economic development has been different for both countries.
      </PapersItem>
      <PapersItem
        title="An Analysis of the Desirability of Cross-Border Barriers to Trade"
        href="https://overleaf.com"
        tag={2}
      >
        This paper discusses the types of cross-border barriers to trade that
        exist in the two aforementioned example cases, and how they affect the
        growth, income, and welfare of the countries involved.
      </PapersItem>
      <PapersItem
        title="The Impossible Trinity"
        href="https://overleaf.com"
        tag={3}
      >
        The impossible trinity in international finance is a policy trilemma
        that all governments face when trying to satisfy three objectives of
        international financial policy: monetary autonomy, exchange rate
        stability, and free capital mobility.
      </PapersItem>
      <PapersItem
        title="India Versus China: Through the Lens of Economic Development"
        href="https://overleaf.com"
        tag={1}
      >
        This paper discusses three key factors in the developmental differences
        of both countries - political machinery, relative timeline of economic
        reforms and strategies, and the reforms themselves.
      </PapersItem>
      <PapersItem
        title="The Future of Global Value Chains Post COVID-19"
        href="https://overleaf.com"
        tag={2}
      >
        The future of global value chains is not going to be characterized by a
        total departure from them, but rather the diversification of chains
        (especially horizontal diversification across countries) and more
        supply-side protections that do not detract from the efficiency and
        productivity gains that are the hallmark of GVCs.
      </PapersItem>
      <PapersItem
        title="International Crises And The Global Economy"
        href="https://overleaf.com"
        tag={3}
      >
        The increasing interconnectedness of the global financial system has
        made international financial crises spread very far, very fast, and made
        domestic financial crises spread to other countries in the region as
        well.
      </PapersItem> */}
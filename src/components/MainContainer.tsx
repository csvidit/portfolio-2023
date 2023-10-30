import styles from "./MainContainer.module.css";
import {
  Work_Sans,
  Outfit,
  Sora,
  Red_Hat_Text,
  Mulish,
  Public_Sans,
  Manrope,
  Albert_Sans
} from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin-ext"] });
const outfit = Outfit({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });
const rht = Red_Hat_Text({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
const ps = Public_Sans({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const albert = Albert_Sans({subsets: ["latin"]});

const MainContainer = (props: { children: any; className?: string }) => {
  return (
    <div
      className={`relative min-w-screen min-h-screen h-full flex flex-col font-light justify-center bg-neutral-950 text-neutral-100
        ${props.className} ${albert.className}`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;

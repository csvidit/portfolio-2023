import styles from "./MainContainer.module.css";
import { Work_Sans, Outfit, Sora, Red_Hat_Text} from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin-ext"] });
const outfit = Outfit({subsets: ["latin"]})
const sora = Sora({subsets: ["latin"]})
const rht = Red_Hat_Text({subsets: ["latin"]})

const MainContainer = (props: { children: any }) => {
  return (
    <div
      className={`relative min-w-screen min-h-screen h-full flex flex-col font-thin justify-center bg-neutral-950 text-neutral-100
        ${styles.main_container} ${rht.className} `}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;

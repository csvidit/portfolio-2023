import styles from "./MainContainer.module.css";
import {Work_Sans} from "next/font/google";

const work_sans = Work_Sans({subsets: ["latin"]});

const MainContainer = (props: { children: any }) => {
  
  return (
    <div
      className={
        `relative min-w-screen min-h-screen h-full flex flex-col font-light justify-center bg-neutral-950 text-slate-100
        ${styles.main_container} ${work_sans.className}`
      }
    >
      {props.children}
    </div>
  );
};

export default MainContainer;

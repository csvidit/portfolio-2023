import styles from "./MainContainer.module.css";

const MainContainer = (props: { children: any }) => {
  
  return (
    <div
      className={
        "relative min-w-screen min-h-screen h-full flex flex-col justify-center bg-neutral-950 text-slate-100 " +
        styles.main_container
      }
    >
      {props.children}
    </div>
  );
};

export default MainContainer;

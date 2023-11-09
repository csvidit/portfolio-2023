"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import ExpTitle from "./ExpTitle";
import ExpCompany from "./ExpCompany";
import ExpBullets from "./ExpBullets";

const CurrentExp = (props: {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#172554");

  useEffect(() => {
    const boxElement = ref.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.8) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={ref}
      style={
        {
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #0a0a0a, #3b82f6)",
          "--bg-color": `linear-gradient(#0a0a0a, ${color})`,
        } as CSSProperties
      }
      className="relative flex flex-col justify-between space-y-4 col-span-4 row-span-2 rounded-[3rem] p-8 lg:p-12 border border-[#0000] [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      <div className="text-blue-500">Short Term Contract</div>
      <div className="font-normal text-2xl lg:text-4xl">Pixus Inc.</div>
      <h3
        className={`font-normal text-blue-500 geom text-xl lg:text-2xl flex flex-row space-x-2 items-center`}
      >
        Software Development Engineer
      </h3>
      <ExpBullets>
        <li>
          Developed the second version of the CaptureNoire internal beta with
          refreshed UI made using Jetpack Compose and backend code ported to
          Kotlin
        </li>
        <li>
          Revamped the user flow of the app for a more immersive UX, and added
          Firebase Authentication, Storage, and Firestore database integrations
        </li>
      </ExpBullets>
    </div>
  );
};

export default CurrentExp;

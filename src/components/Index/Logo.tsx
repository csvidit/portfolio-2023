import React from "react";
import { motion } from "framer-motion";

const Logo = (props: {size: string}) => {

  if(props.size == "nav")
  {
    return (
      <React.Fragment>
        <motion.svg
          className="main-v v-anim w-[24px] h-[24px] lg:w-[24px] lg:h-[24px]"
          viewBox="0 0 1835 2315"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2",
          }}
        >
          <motion.g transform="matrix(1,0,0,1,-1582.78,-1342.76)">
            <motion.g
              transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
              animate={{
                opacity: [0, 1],
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.2},
              }}
            >
              <motion.path
                d="M523.897,1018.64C524.012,1018.96 524.313,1019.17 524.65,1019.17L533.65,1019.17C533.987,1019.17 534.288,1018.96 534.403,1018.64L586.803,874.645C586.893,874.4 586.857,874.126 586.707,873.911C586.557,873.697 586.312,873.569 586.05,873.569L577.05,873.569C576.713,873.569 576.412,873.78 576.297,874.097L529.052,1003.82C529.052,1003.82 482.004,874.098 482.004,874.098C481.889,873.781 481.587,873.569 481.25,873.569L472.25,873.569C471.988,873.569 471.743,873.697 471.593,873.911C471.443,874.126 471.407,874.4 471.497,874.645L523.897,1018.64ZM524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L524.65,1018.37Z"
                style={{ fill: "#a3e635" }}
                className="v-anim-1"
                animate={{
                  scaleZ: [2, 0],
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.2},
                }}
              ></motion.path>
            </motion.g>
            <motion.g
              transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
              animate={{
                opacity: [0, 1],
                transition: { ease: "easeInOut", delay: 0.4, duration: 0.2},
              }}
            >
              <clipPath id="_clip1">
                <motion.rect
                  x="527.867"
                  y="940.188"
                  width="56.9"
                  height="78.183"
                  className="v-anim-2"
                  animate={{
                    translateX: [40, 0],
                    translateY: [-40, 0],
                    transition: { ease: "easeInOut", delay: 0.4, duration: 0.2},
                  }}
                ></motion.rect>
              </clipPath>
              <motion.g clipPath="url(#_clip1)">
                <motion.path
                  d="M524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L527.68,1002.39L524.65,1018.37Z"
                  style={{ fill: "#a3e635", fillRule: "nonzero" }}
                  className="v-anim-3"
                ></motion.path>
              </motion.g>
            </motion.g>
            <motion.g
              transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
              animate={{
                opacity: [0, 1],
                transition: { ease: "easeInOut", delay: 0.6, duration: 0.2},
              }}
            >
              <clipPath id="_clip2">
                <motion.rect
                  x="472.25"
                  y="874.371"
                  width="56.9"
                  height="78.183"
                  className="v-anim-4"
                  animate={{
                    translateX: [-40, 0],
                    translateY: [40, 0],
                    transition: { ease: "easeInOut", delay: 0.6, duration: 0.2},
                  }}
                ></motion.rect>
              </clipPath>
              <motion.g clipPath="url(#_clip2)">
                <motion.path
                  d="M524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L524.65,1018.37Z"
                  style={{ fill: "#a3e635", fillRule: "nonzero" }}
                  className="v-anim-5"
                ></motion.path>
              </motion.g>
            </motion.g>
          </motion.g>
        </motion.svg>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <motion.svg
        className="main-v v-anim w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
        viewBox="0 0 1835 2315"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
      >
        <motion.g transform="matrix(1,0,0,1,-1582.78,-1342.76)">
          <motion.g
            transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
            animate={{
              opacity: [0, 1],
              transition: { ease: "easeInOut", delay: 0.2, duration: 0.2},
            }}
          >
            <motion.path
              d="M523.897,1018.64C524.012,1018.96 524.313,1019.17 524.65,1019.17L533.65,1019.17C533.987,1019.17 534.288,1018.96 534.403,1018.64L586.803,874.645C586.893,874.4 586.857,874.126 586.707,873.911C586.557,873.697 586.312,873.569 586.05,873.569L577.05,873.569C576.713,873.569 576.412,873.78 576.297,874.097L529.052,1003.82C529.052,1003.82 482.004,874.098 482.004,874.098C481.889,873.781 481.587,873.569 481.25,873.569L472.25,873.569C471.988,873.569 471.743,873.697 471.593,873.911C471.443,874.126 471.407,874.4 471.497,874.645L523.897,1018.64ZM524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L524.65,1018.37Z"
              style={{ fill: "#a3e635" }}
              className="v-anim-1"
              animate={{
                scaleZ: [2, 0],
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.2},
              }}
            ></motion.path>
          </motion.g>
          <motion.g
            transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
            animate={{
              opacity: [0, 1],
              transition: { ease: "easeInOut", delay: 0.4, duration: 0.2},
            }}
          >
            <clipPath id="_clip1">
              <motion.rect
                x="527.867"
                y="940.188"
                width="56.9"
                height="78.183"
                className="v-anim-2"
                animate={{
                  translateX: [40, 0],
                  translateY: [-40, 0],
                  transition: { ease: "easeInOut", delay: 0.4, duration: 0.2},
                }}
              ></motion.rect>
            </clipPath>
            <motion.g clipPath="url(#_clip1)">
              <motion.path
                d="M524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L527.68,1002.39L524.65,1018.37Z"
                style={{ fill: "#a3e635", fillRule: "nonzero" }}
                className="v-anim-3"
              ></motion.path>
            </motion.g>
          </motion.g>
          <motion.g
            transform="matrix(15.8958,0,0,15.8958,-5911.28,-12543.4)"
            animate={{
              opacity: [0, 1],
              transition: { ease: "easeInOut", delay: 0.6, duration: 0.2},
            }}
          >
            <clipPath id="_clip2">
              <motion.rect
                x="472.25"
                y="874.371"
                width="56.9"
                height="78.183"
                className="v-anim-4"
                animate={{
                  translateX: [-40, 0],
                  translateY: [40, 0],
                  transition: { ease: "easeInOut", delay: 0.6, duration: 0.2},
                }}
              ></motion.rect>
            </clipPath>
            <motion.g clipPath="url(#_clip2)">
              <motion.path
                d="M524.65,1018.37L472.25,874.371L481.25,874.371L529.05,1006.17L577.05,874.371L586.05,874.371L533.65,1018.37L524.65,1018.37Z"
                style={{ fill: "#a3e635", fillRule: "nonzero" }}
                className="v-anim-5"
              ></motion.path>
            </motion.g>
          </motion.g>
        </motion.g>
      </motion.svg>
    </React.Fragment>
  );
};

export default Logo;

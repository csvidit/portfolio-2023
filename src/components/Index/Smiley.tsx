import React from "react";

const Smiley = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <defs>
            <radialGradient id="ccclaymoji-grad-dark" cx="20%" cy="20%" r="93%">
              <stop offset="70%" stopColor="#84cc16" stopOpacity="0"></stop>
              <stop offset="97%" stopColor="#4f9b00"></stop>
            </radialGradient>
            <radialGradient id="ccclaymoji-grad-light" cx="28%" cy="20%" r="65%">
              <stop offset="0%" stopColor="#b8ff54" stopOpacity="0.75"></stop>
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0"></stop>
            </radialGradient>
            <filter
              id="ccclaymoji-blur"
              width="400%"
              height="400%"
              x="-100%"
              y="-100%"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
            >
              <feGaussianBlur
                x="0%"
                y="0%"
                in="SourceGraphic"
                result="blur"
                stdDeviation="30"
              ></feGaussianBlur>
            </filter>
            <filter
              id="inner-blur"
              width="400%"
              height="400%"
              x="-100%"
              y="-100%"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
            >
              <feGaussianBlur
                x="0%"
                y="0%"
                in="SourceGraphic"
                result="blur"
                stdDeviation="2"
              ></feGaussianBlur>
            </filter>
            <filter
              id="eye-shadow"
              width="400%"
              height="400%"
              x="-100%"
              y="-100%"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
            ></filter>
            <linearGradient
              id="eye-light"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
              gradientTransform="rotate(-25)"
            >
              <stop offset="20%" stopColor="#555"></stop>
              <stop offset="100%" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="mouth-light" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#ff9667"></stop>
              <stop
                offset="100%"
                stopColor="hsl(3, 100%, 51%)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
            <filter
              id="mouth-shadow"
              width="400%"
              height="400%"
              x="-100%"
              y="-100%"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
            ></filter>
          </defs>
          <g strokeLinecap="round">
            <path
              fill="#4f9b00"
              d="M650 450c0 152.958-97.042 276.954-250 276.954S150 602.958 150 450c0-152.958 97.042-276.954 250-276.954S650 297.042 650 450z"
              filter="url(#ccclaymoji-blur)"
              opacity="0.25"
            ></path>
            <path
              fill="#84cc16"
              d="M650 400c0 161.674-88.326 235.755-250 235.755-161.673 0-250-74.081-250-235.755 0-161.673 88.327-235.755 250-235.755 161.674 0 250 74.082 250 235.755z"
            ></path>
            <path
              fill="url(#ccclaymoji-grad-dark)"
              d="M650 400c0 161.674-88.326 235.755-250 235.755-161.673 0-250-74.081-250-235.755 0-161.673 88.327-235.755 250-235.755 161.674 0 250 74.082 250 235.755z"
            ></path>
            <path
              fill="url(#ccclaymoji-grad-light)"
              d="M650 400c0 161.674-88.326 235.755-250 235.755-161.673 0-250-74.081-250-235.755 0-161.673 88.327-235.755 250-235.755 161.674 0 250 74.082 250 235.755z"
            ></path>
            <ellipse
              cx="350"
              cy="375"
              filter="url(#eye-shadow)"
              rx="26.5"
              ry="25"
            ></ellipse>
            <ellipse
              cx="350"
              cy="375"
              fill="url(#eye-light)"
              filter="url(#inner-blur)"
              rx="26.5"
              ry="25"
            ></ellipse>
            <ellipse
              cx="450"
              cy="375"
              filter="url(#eye-shadow)"
              rx="23.5"
              ry="25"
            ></ellipse>
            <ellipse
              cx="450"
              cy="375"
              fill="url(#eye-light)"
              filter="url(#inner-blur)"
              rx="23.5"
              ry="25"
            ></ellipse>
            <path
              fill="none"
              stroke="hsl(3, 100%, 51%)"
              strokeWidth="20"
              d="M347.5 512.5q50 50 105 0"
              filter="url(#mouth-shadow)"
            ></path>
            <path
              fill="none"
              stroke="url(#mouth-light)"
              strokeWidth="6.667"
              d="M347.5 512.5q50 50 105 0"
              filter="url(#inner-blur)"
            ></path>
          </g>
        </svg>
      );
};

export default Smiley;

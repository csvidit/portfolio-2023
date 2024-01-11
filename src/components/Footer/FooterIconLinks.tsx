"use client";

import { RiTwitterXLine } from "react-icons/ri";
import FooterIconLink from "./FooterIconLink";
import {
  PiEnvelope,
  PiFilePdf,
  PiGithubLogo,
  PiLinkedinLogo,
  PiReadCvLogo,
} from "react-icons/pi";
import { LiaReadme } from "react-icons/lia";
import { hygraphResumeLink } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";

const footerIcons = [
  {
    href: "https://github.com/csvidit",
    label: "GitHub",
    icon: <PiGithubLogo />,
  },
  {
    href: "https://twitter.com/csvidit",
    label: "X/Twitter",
    icon: <RiTwitterXLine />,
  },
  {
    href: "https://linkedin.com/in/viditkhandelwal",
    label: "LinkedIn",
    icon: <PiLinkedinLogo />,
  },
  {
    href: "https://read.cv/viditkhandelwal",
    label: "ReadCV",
    icon: <PiReadCvLogo />,
  },
  {
    href: "mailto:viditk17@gmail.com",
    label: "Email",
    icon: <PiEnvelope />,
  },
  {
    href: hygraphResumeLink,
    label: "Resume",
    icon: <PiFilePdf />,
  },
  {
    href: "https://github.com/csvidit/portfolio-2023/blob/main/README.md",
    label: "ReadMe",
    icon: <LiaReadme />,
  },
];

const FooterIconLinks = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  return (
    <motion.div
      layout
      layoutRoot
      className="flex flex-row justify-center items-center space-x-0"
    >
      {footerIcons.map((icon, index) => {
        return (
          <FooterIconLink
            index={index}
            key={index}
            href={icon.href}
            label={icon.label}
            hoveredLinkId={hoveredLinkId}
            setHoveredLinkId={setHoveredLinkId}
          >
            {icon.icon}
          </FooterIconLink>
        );
      })}
    </motion.div>
  );
};

export default FooterIconLinks;

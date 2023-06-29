'use client'

import { motion } from "framer-motion"

const EducationTitle = (props: {children: React.ReactNode}) => {
    return (<motion.div className="text-xl lg:text-2xl geom">{props.children}</motion.div>)
};

export default EducationTitle;
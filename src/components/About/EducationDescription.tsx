'use client'

import { motion } from "framer-motion"

const EducationDescription = (props: {children: React.ReactNode}) => {
    return (<motion.div className="text-neutral-500">
        {props.children}
    </motion.div>)
};

export default EducationDescription;
'use client'

import { motion } from "framer-motion";

const ExpCompany = (props: {children: React.ReactNode}) => {
    return (<motion.div className="text-2xl lg:text-4xl geom">{props.children}</motion.div>)
};

export default ExpCompany;
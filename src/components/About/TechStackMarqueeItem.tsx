const TechStackMarqueeItem = (props: {children: React.ReactNode}) => {
    return (<span className="inline mx-4">
        {props.children}
    </span>)
}

export default TechStackMarqueeItem;
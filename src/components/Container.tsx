
interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="

                2xl:relative
                bg-fixed
            "
            style={{ backgroundImage: "url(./top.jpg)" }}
        >
            {children}
        </div>
    )
}

export default Container;
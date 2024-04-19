interface TeamWorkProps {
    icon: string
}


const TeamWork: React.FC<TeamWorkProps> = ({
    icon
}) => {
    return (
        <img
            alt="work"
            className="
                "
            src={icon} />
    )
}

export default TeamWork;
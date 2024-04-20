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
            sm:w-[260px]
            sm:h-[350px]
                "
            src={icon} />
    )
}

export default TeamWork;
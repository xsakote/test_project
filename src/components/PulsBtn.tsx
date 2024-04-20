interface PlusBtnProps {
    onClick: ()=>void
}


const PlusBtn:React.FC<PlusBtnProps> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="flex items-center justify-center z-10 w-[52px] h-[52px] bg-cover text-white text-base pl-3" style={{ backgroundImage: "url(./plus.png)" }}>
                <span>+</span>
            </div>
        </>
    )
}

export default PlusBtn;
interface MinusBtn {
    onClick:()=>void;
}

const MinusBtn:React.FC<MinusBtn> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="flex items-center justify-center z-10 w-[52px] h-[52px] bg-cover text-white text-base pl-3" style={{ backgroundImage: "url(./minus.png)" }}>
                <span>-</span>
            </div>
        </>
    )
}

export default MinusBtn;
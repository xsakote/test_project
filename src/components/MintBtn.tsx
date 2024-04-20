interface MintBtnProps {
    onClick:()=>void;
}

const MintBtn:React.FC<MintBtnProps> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="flex items-center justify-center z-10 w-[123px] h-[40px] bg-cover text-white font-ABeeZee text-base" style={{ backgroundImage: "url(./connect_wallet.png)" }}>
                <h1>Mint</h1>
            </div>
        </>
    )
}

export default MintBtn;
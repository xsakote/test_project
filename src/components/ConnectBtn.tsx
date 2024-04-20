interface ConnectBtnProps {
    onClick: ()=> void;
}

const ConnectBtn:React.FC<ConnectBtnProps> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="flex items-center justify-center z-10 md:w-[182px] md:h-[60px] w-[172px] h-[55px] bg-cover text-white font-ABeeZee text-base" style={{ backgroundImage: "url(./connect_wallet.png)" }}>
                <h1>Connect Wallet</h1>
            </div>
        </>
    )
}

export default ConnectBtn;
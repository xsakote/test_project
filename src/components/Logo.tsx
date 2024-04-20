import { useCallback, useState } from "react";
interface LogoProps {
    onClick: () => void
}
const Logo:React.FC<LogoProps> = ({
    onClick
}) => {
    
    return (
        <>
            <a onClick={onClick} className="sm:-left-[120px] sm:block lg:hidden">
                <img
                    alt="top_man"
                    className="w-[90px] h-60px]"
                    src="./Logo1.png"
                />
            </a>
        </>

    )
}

export default Logo;
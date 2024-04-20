'use client'

interface LeftNavProps {
    open: boolean;
}

const LeftNav: React.FC<LeftNavProps> = ({
    open
}) => {
    return (
        <div className={`flex-col z-30 justify-center items-center  2xl:w-[520px] xl:w-[520px] lg:w-[520px] lg:h-full w-[100%] h-[800px] mr-[20px] ${open ? "block" : "lg:block hidden"} bg-black text-white fixed`}>
            <div className="ml-16 flex items-center justify-start mt-[24px]">
                <img
                    alt="top_man"
                    className="w-[75px] h-[50px]"
                    src="./Logo1.png"
                />
                <h1>DaoLabs Ecosystem</h1>
            </div>
            <div className="flex gap-10 items-center justify-center text-[24px] mt-[40px]">
                <a href="#">HOME</a>
                <a href="#">ECOSYSTEM</a>
                <a href="#">TEAM</a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
                <img
                    alt="top_man"
                    className="w-[60px] h-[60px]"
                    src="./group1.png"
                />
                <div className="relative w-[60px] h-[60px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./group2.png"
                    />
                </div>

                <img
                    alt="top_man"
                    className="w-[60px] h-[60px]"
                    src="./group3.png"
                />
                <img
                    alt="top_man"
                    className="w-[60px] h-[60px]"
                    src="./group4.png"
                />
                <img
                    alt="top_man"
                    className="w-[60px] h-650px]"
                    src="./group1.png"
                />
            </div>
            <div className="text-center text-[66px] mt-8">
                <p className="leading-[70px]">MULTIDAO<br />X MUTANT</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:mx-14 md:mx-[200px] sm:mx-[20px]  mx-4  mt-10 leading-5">
                <p>MultiDao X Mutant is a collection of 5,555 unique and rare NFTs, that are designed to offer their owners a range of benefits and advantages within DaoLabs ecosystem. such as:</p>
                <div className="flex">
                    <div>&nbsp;1.</div>
                    <div>&nbsp;Staking: Mutant X NFTs can be staked to earn passive income in $EGLD.</div>
                </div>
                <div className="flex">
                    <div>&nbsp;2.</div>
                    <div>&nbsp;Royalty Sharing: Mutant X NFT Holders are entitled to a 2.5% (of 5%) royalty share from the sale of any Mutant X NFT on the secondary market.</div>
                </div>
                <div className="flex">
                    <div>&nbsp;3.</div>
                    <div>&nbsp;Game P2e: Mutant X NFTs can be used in main game and other activities within the daolabs ecosystem, providing their owners with a range of benefits and rewards.</div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
                <div className="relative w-[12px] h-[12px]">
                    <div className="relative w-[12px] h-[12px]">
                        <img
                            alt="top_man"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                            src="./gitbook.png"
                        />
                    </div>
                </div>
                <div className="relative w-[12px] h-[12px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./discord.png"
                    />
                </div>

                <div className="relative w-[12px] h-[12px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./twitter.png"
                    />
                </div>
                <div className="relative w-[12px] h-[4px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./Medium.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
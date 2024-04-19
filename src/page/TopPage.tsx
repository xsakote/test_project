import ConnectBtn from "../components/ConnectBtn";
import FV_1 from "../components/FV_1";
import FV_2 from "../components/FV_2";
import Image from "../components/Image";
import LeftNav from "../components/LeftNav";
import MintBtn from "../components/MintBtn";
import MinusBtn from "../components/Minusbtn";
import Phases from "../components/Phases";
import PlusBtn from "../components/PulsBtn";
import TeamWork from "../components/TeamWork";

const TopPage = () => {
    const des = [
        {
            "title": "1",
            "label1": "DAOLABS BUILD",
            "label2": "ON MULTIVERSX",
            "label3": "DaoList pass",
            "label4": "x 3d is live",
            "icon": "./phase1.png"
        },
        {
            "title": "2",
            "label1": "COMMUNITY",
            "label2": "ENGAGEMENT",
            "label3": "MULTIDAO",
            "label4": "MUTANT is live",
            "icon": "./phase2.png"
        },
        {
            "title": "3",
            "label1": "TOKENIZATION",
            "label2": "",
            "label3": "UPGRADES",
            "label4": "",
            "icon": "./phase3.png"
        },
        {
            "title": "4",
            "label1": "GAMIFICATION",
            "label2": "",
            "label3": "FULL MULTIVERSX ",
            "label4": "ECOSYSTEM",
            "icon": "./phase4.png"
        },
    ];

    const works = [
        {
            "icon": "./work1.png"
        },
        {
            "icon": "./work2.png"
        },
        {
            "icon": "./work3.png"
        },
        {
            "icon": "./work4.png"
        },
        {
            "icon": "./work5.png"
        },
        {
            "icon": "./work6.png"
        },
        {
            "icon": "./work7.png"
        }
    ]

    return (
        <>
            <div className="flex">
                <div>
                    <LeftNav />
                </div>
                <div className="flex flex-col">
                    <div className="top-11 right-11 absolute">
                        <ConnectBtn />
                    </div>
                    <div className="2xl:flex 2xl:ml-[590px] 2xl:relative 2xl:justify-around
                                    
                    ">
                        <div className="flex items-center justify-center lg:mt-16 sm:mt-16">
                            <Image />
                        </div>
                        <div className="2xl:pt-52 2xl:mr-12">
                            <div className="flex items-center justify-around gap-12">
                                <FV_1 />
                                <FV_2 />
                            </div>
                            <div className="flex flex-col items-center justify-center mx-auto text-white">
                                <h1 className="text-xl w-[200px] text-center mt-2 mb-5">MINT HERE YOUR MULTIDAO X MUTANT</h1>
                                <label>2222/5555 OUT</label>
                            </div>
                            <div className="flex gap-6 items-center justify-center">
                                <MinusBtn />
                                <MintBtn />
                                <PlusBtn />
                            </div>
                        </div>
                    </div>
                    <hr className="my-20"></hr>
                    <div className="2xl:ml-[570px] 2xl:mr-[60px] xl:mr-[40px] lg:mr-[30px] md:mx-[20px] sm:mx-[20px] flex justify-around flex-col">
                        {des.map((item, idx) => (
                            <div className={`flex  flex-col  ${idx % 2 === 0 ? "items-start" : "items-end"}`} key={idx}>
                                <Phases
                                    title={item.title}
                                    label1={item.label1}
                                    label2={item.label2}
                                    label3={item.label3}
                                    label4={item.label4}
                                    icon={item.icon}
                                />
                            </div>

                        ))}
                    </div>
                    <hr className="my-20"></hr>
                    <div className="text-center 2xl:ml-[500px] text-white mb-28">
                        <h1 className="text-6xl mb-10">TEAM</h1>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {works.map((item, idx) => (
                                <TeamWork
                                    key={idx}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopPage;
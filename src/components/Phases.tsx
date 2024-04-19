interface PhasesProps {
    title: string;
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    icon: string;
}

const Phases: React.FC<PhasesProps> = ({
    title,
    label1,
    label2,
    label3,
    label4,
    icon
}) => {
    return (
        <div className="flex items-center justify-center gap-8 w-[405px] h-[130px] rounded-[40px]  border-[3px] border-[#23F7DD] bg-black my-1">
            <div className="flex items-center flex-col w-[200px]">
                <div className="flex gap-2 mb-2">
                    <div className="text-white mt-0">
                        <span>-</span>
                    </div>
                    <div className="text-white leading-5">
                        <h1 className="text-center">{label1} <br/>{label2}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-white mt-0">
                        <span>-</span>
                    </div>
                    <div className="text-white leading-5">
                        <h1 className="text-center">{label3} <br/>{label4}</h1>
                    </div>
                </div>
            </div>
            <div className="border-r-[28px] relative h-full border-[rgb(35,247,221)]">
                <div className="absolute text-white -rotate-90 -ml-4 top-12">
                    PHASE&nbsp;{title}
                </div>
            </div>
            <div className="">
                <img
                    alt="top_man"
                    className="
                "
                    src={icon}
                />
            </div>
        </div>
    )
}

export default Phases;
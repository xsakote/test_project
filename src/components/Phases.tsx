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
        <div className="flex items-center justify-center 
            gap-8 2xl:w-[405px] 2xl:h-[130px] 2xl:rounded-[40px]
            xl:w-[405px] xl:h-[130px] xl:rounded-[40px]
            md:w-[405px] md:h-[130px] md:rounded-[40px]
            lg:w-[405px] lg:h-[130px] lg:rounded-[40px]
            sm:w-[340px] sm:h-[120px] sm:rounded-[40px]
            w-[405px] h-[130px] rounded-[40px]
            border-[3px] border-[#23F7DD] bg-black my-1

        ">
            <div className="flex items-center flex-col w-[200px]">
                <div className="flex gap-2 mb-2">
                    <div className="text-white mt-0">
                        <span>-</span>
                    </div>
                    <div className="text-white leading-5">
                        <h1 className="text-center">{label1} <br />{label2}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-white mt-0">
                        <span>-</span>
                    </div>
                    <div className="text-white leading-5">
                        <h1 className="text-center">{label3} <br />{label4}</h1>
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
                    sm:-ml-3 sm:mr-6
                "
                    src={icon}
                />
            </div>
        </div>
    )
}

export default Phases;
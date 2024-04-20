import React from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const ModalDialog: React.FC<ModalProps> = ({
    open,
    onClose
}) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${open ? 'block' : 'hidden'}`}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={onClose} // Close the modal when clicking outside
        >
            <div className="flex justify-center items-center sm:mx-[40px] w-full  h-1/5 sm:h-1/3 p-8 shadow-lg bg-cover">
                <div className="flex flex-col justify-center items-center mb-4">
                    <div className='flex'>
                        <div className='flex  items-center justify-center  sm:p-7 md:p-10 gap-20 border-[3px] border-[#23F7DD] rounded-ss-[40px]' style={{ backgroundImage: 'url(./modal.png)' }} onClick={(e) => e.stopPropagation()}>
                            <img
                                alt="top_man"
                                className="
                                sm:w-[100px]
                                sm:h-[100px]
                                "
                                src="./modal_1.png"
                            />
                        </div>
                        <div className='flex items-center justify-center  sm:p-7 md:p-10 gap-20 border-[3px] border-[#23F7DD] rounded-se-[40px]' style={{ backgroundImage: 'url(./modal.png)' }} onClick={(e) => e.stopPropagation()}>
                            <img
                                alt="top_man"
                                className="
                                sm:w-[100px]
                                 sm:h-[100px]
                                "
                                src="./modal_2.png"
                            />
                        </div>
                    </div>
                    <div className='flex pr-3'>
                        <div className='flex items-center justify-center  sm:p-7 md:p-10  gap-20 border-[3px] border-[#23F7DD] rounded-es-[40px]' style={{ backgroundImage: 'url(./modal.png)' }} onClick={(e) => e.stopPropagation()}>
                            <img
                                alt="top_man"
                                className="
                                 sm:w-[100px]
                                 sm:h-[100px]
                                "
                                src="./modal_2.png"
                            />
                        </div>
                        <div className='flex -mr-3 items-center justify-center sm:p-7 md:p-10 gap-20 border-[3px] border-[#23F7DD] rounded-ee-[40px]' style={{ backgroundImage: 'url(./modal.png)' }} onClick={(e) => e.stopPropagation()}>
                            <img
                                alt="top_man"
                                className="
                                sm:w-[100px]
                                 sm:h-[100px]
                                "
                                src="./modal_1.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDialog;
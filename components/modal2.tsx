import Image from "next/image";
import IDCardFlip from "./idCardFlipModal";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function Modal2({ isOpen, setIsOpen }: ModalProps) {
    if (!isOpen) return null;

    return (
        <>

            <div
                className="fixed inset-0 max-w-[425px] bg-black bg-opacity-50 backdrop-blur-md z-20"
                onClick={() => setIsOpen(false)}
            ></div>


            <div className="fixed inset-0  mt-[100px] rounded-xl p-4 z-50">
                <div
                    className="max-w-[405px] w-full bg-[#081D48] rounded-2xl relative p-4 "
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex items-center justify-between mb-4">
                        <div className="text-white font-medium text-[18px]">
                            Гадаад паспорт
                        </div>
                        <button
                            className="text-white text-lg font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </div>


                    <div className="flex justify-center text-xs mb-3 ">
                        <div className="relative w-[490px] h-[310px] scale-[1.4] origin-top-left">

                            <Image
                                src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/passport.svg"
                                alt="Passport"
                                width={350}
                                height={220}
                                className="object-cover rounded-[12px]"
                                priority
                            />

                            {/* Left-side personal info */}
                            <div className="absolute text-black" style={{ top: 69, left: 105 }}>
                                ULAM-URNUKH
                            </div>
                            <div className="absolute text-black" style={{ top: 94, left: 105 }}>
                                BYAMBATSEREN
                            </div>
                            <div className="absolute text-black" style={{ top: 116, left: 105 }}>
                                MONGOLIA
                            </div>
                            <div className="absolute text-black" style={{ top: 140, left: 105 }}>
                                KV06271414
                            </div>
                            <div className="absolute text-black" style={{ top: 163, left: 105 }}>
                                01 MAY 2025
                            </div>
                            <div className="absolute text-black" style={{ top: 186, left: 105 }}>
                                30 APR 2035
                            </div>
                            <div className="absolute text-black" style={{ top: 50, left: 105 }}>
                                PE
                            </div>


                            <Image
                                src="/mee.png"
                                alt="Зураг"
                                width={90}
                                height={125}
                                className="absolute"
                                style={{ top: 46, left: 7 }}
                            />


                            <div className="absolute text-black" style={{ top: 116, left: 210 }}>
                                14/07/2006
                            </div>
                            <div className="absolute text-black" style={{ top: 138, left: 210 }}>
                                M
                            </div>
                            <div className="absolute text-black" style={{ top: 162, left: 210 }}>
                                General Authority for
                            </div>
                            <div className="absolute text-black" style={{ top: 172, left: 210 }}>
                                State Registration of
                            </div>
                            <div className="absolute text-black" style={{ top: 182, left: 210 }}>
                                Mongolia
                            </div>
                            <div className="absolute text-black" style={{ top: 50, left: 179 }}>
                                MNG
                            </div>
                            <div className="absolute text-black" style={{ top: 50, left: 250 }}>
                                PE0000910
                            </div>
                        </div>
                    </div>

                    


                    <div className="flex gap-4 justify-center mb-3">
                        <a href="/service/5d8b13383666c358f659b2ee">
                            <button className="whitespace-nowrap rounded-full px-6 h-10 inline-flex items-center justify-center bg-[#3B82F6] text-white font-semibold hover:bg-blue-600 transition">
                                Лавлагаа авах
                            </button>
                        </a>

                        <a href="/service/5d89092e0384df7e7f11858a">
                            <button className="whitespace-nowrap rounded-full px-6 h-10 inline-flex items-center justify-center border-[1.5px] border-[#3B82F6] bg-[#1E2A40] text-[#3B82F6] font-semibold hover:bg-blue-950 transition">
                                Дахин захиалах
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
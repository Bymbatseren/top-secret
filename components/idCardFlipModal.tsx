"use client"
import { useState } from "react"
import IdentityCard from "./IdentityCard"

export default function IDCardFlip() {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className="flex flex-col items-center gap-6">

            <div
                className="perspective"
                onClick={() => setFlipped(!flipped)}
            >
                <div
                    className={`relative w-[490px] h-[308px] duration-700 preserve-3d transition-transform ${flipped ? "rotate-y-180" : ""
                        }`}
                >

                    {/* FRONT */}
                    <div className="absolute w-full h-full backface-hidden">
                        <div className="relative text-xs inline-block min-w-[490px] min-h-[308px] overflow-hidden">

                            <div className="origin-top-left scale-[1.4]">

                                {/* Background */}
                                <img
                                    src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/id-card-front.svg"
                                    alt="ID Card"
                                    className="w-[350px] h-[220px] object-cover rounded-xl"
                                />

                                {/* Text overlays */}
                                <div className="absolute top-[58px] left-[104px] z-10 text-black">
                                    Боржигон Шар Дугар
                                </div>

                                <div className="absolute top-[87px] left-[104px] z-10 text-black">
                                    Улам-Өрнөх
                                </div>

                                <div className="absolute top-[114px] left-[104px] z-10 text-black">
                                    БЯМБАЦЭРЭН
                                </div>

                                <div className="absolute top-[143px] left-[104px] z-10 text-black">
                                    Эрэгтэй
                                </div>

                                <div className="absolute top-[173px] left-[104px] z-10 text-black">
                                    2006/07/14
                                </div>

                                <div className="absolute top-[194px] left-[104px] z-10 text-black">
                                    675718393215
                                </div>

                                {/* Photo */}
                                <img
                                    src="/me.png"
                                    alt="Зураг"
                                    className="absolute top-[70px] left-[5px] w-[90px] h-[125px] z-10 object-cover"
                                />

                            </div>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                        <div className="relative text-xs font-sans inline-block min-w-[490px] min-h-[308px] overflow-hidden">

                            <div className="origin-top-left scale-[1.4]">

                                {/* Background */}
                                <img
                                    src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/id-card-back.svg"
                                    alt="ID Card Back"
                                    className="w-[350px] h-[220px] object-cover rounded-xl"
                                />

                                {/* Issue & Expiry Date */}
                                <div className="absolute top-[70px] left-[119px] z-10 text-black">
                                    2022-09-05
                                </div>
                                <div className="absolute top-[95px] left-[119px] z-10 text-black">
                                    2031/07/14
                                </div>

                              
                                <div className="absolute top-[157px] left-0 w-[61px] h-[61px] bg-white flex items-center justify-center z-10">
                                    <svg
                                        width="45"
                                        height="45"
                                        viewBox="0 0 21 21"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z M 2 0 l 1 0 0 1 -1 0 Z M 3 0 l 1 0 0 1 -1 0 Z M 4 0 l 1 0 0 1 -1 0 Z M 5 0 l 1 0 0 1 -1 0 Z M 6 0 l 1 0 0 1 -1 0 Z    M 10 0 l 1 0 0 1 -1 0 Z  M 12 0 l 1 0 0 1 -1 0 Z  M 14 0 l 1 0 0 1 -1 0 Z M 15 0 l 1 0 0 1 -1 0 Z M 16 0 l 1 0 0 1 -1 0 Z M 17 0 l 1 0 0 1 -1 0 Z M 18 0 l 1 0 0 1 -1 0 Z M 19 0 l 1 0 0 1 -1 0 Z M 20 0 l 1 0 0 1 -1 0 Z M 0 1 l 1 0 0 1 -1 0 Z      M 6 1 l 1 0 0 1 -1 0 Z      M 12 1 l 1 0 0 1 -1 0 Z  M 14 1 l 1 0 0 1 -1 0 Z      M 20 1 l 1 0 0 1 -1 0 Z M 0 2 l 1 0 0 1 -1 0 Z  M 2 2 l 1 0 0 1 -1 0 Z M 3 2 l 1 0 0 1 -1 0 Z M 4 2 l 1 0 0 1 -1 0 Z  M 6 2 l 1 0 0 1 -1 0 Z  M 8 2 l 1 0 0 1 -1 0 Z  M 10 2 l 1 0 0 1 -1 0 Z    M 14 2 l 1 0 0 1 -1 0 Z  M 16 2 l 1 0 0 1 -1 0 Z M 17 2 l 1 0 0 1 -1 0 Z M 18 2 l 1 0 0 1 -1 0 Z  M 20 2 l 1 0 0 1 -1 0 Z M 0 3 l 1 0 0 1 -1 0 Z  M 2 3 l 1 0 0 1 -1 0 Z M 3 3 l 1 0 0 1 -1 0 Z M 4 3 l 1 0 0 1 -1 0 Z  M 6 3 l 1 0 0 1 -1 0 Z      M 12 3 l 1 0 0 1 -1 0 Z  M 14 3 l 1 0 0 1 -1 0 Z  M 16 3 l 1 0 0 1 -1 0 Z M 17 3 l 1 0 0 1 -1 0 Z M 18 3 l 1 0 0 1 -1 0 Z  M 20 3 l 1 0 0 1 -1 0 Z M 0 4 l 1 0 0 1 -1 0 Z  M 2 4 l 1 0 0 1 -1 0 Z M 3 4 l 1 0 0 1 -1 0 Z M 4 4 l 1 0 0 1 -1 0 Z  M 6 4 l 1 0 0 1 -1 0 Z   M 9 4 l 1 0 0 1 -1 0 Z  M 11 4 l 1 0 0 1 -1 0 Z M 12 4 l 1 0 0 1 -1 0 Z  M 14 4 l 1 0 0 1 -1 0 Z  M 16 4 l 1 0 0 1 -1 0 Z M 17 4 l 1 0 0 1 -1 0 Z M 18 4 l 1 0 0 1 -1 0 Z  M 20 4 l 1 0 0 1 -1 0 Z M 0 5 l 1 0 0 1 -1 0 Z      M 6 5 l 1 0 0 1 -1 0 Z   M 9 5 l 1 0 0 1 -1 0 Z M 10 5 l 1 0 0 1 -1 0 Z M 11 5 l 1 0 0 1 -1 0 Z   M 14 5 l 1 0 0 1 -1 0 Z      M 20 5 l 1 0 0 1 -1 0 Z M 0 6 l 1 0 0 1 -1 0 Z M 1 6 l 1 0 0 1 -1 0 Z M 2 6 l 1 0 0 1 -1 0 Z M 3 6 l 1 0 0 1 -1 0 Z M 4 6 l 1 0 0 1 -1 0 Z M 5 6 l 1 0 0 1 -1 0 Z M 6 6 l 1 0 0 1 -1 0 Z  M 8 6 l 1 0 0 1 -1 0 Z  M 10 6 l 1 0 0 1 -1 0 Z  M 12 6 l 1 0 0 1 -1 0 Z  M 14 6 l 1 0 0 1 -1 0 Z M 15 6 l 1 0 0 1 -1 0 Z M 16 6 l 1 0 0 1 -1 0 Z M 17 6 l 1 0 0 1 -1 0 Z M 18 6 l 1 0 0 1 -1 0 Z M 19 6 l 1 0 0 1 -1 0 Z M 20 6 l 1 0 0 1 -1 0 Z         M 8 7 l 1 0 0 1 -1 0 Z  M 10 7 l 1 0 0 1 -1 0 Z           M 0 8 l 1 0 0 1 -1 0 Z M 1 8 l 1 0 0 1 -1 0 Z M 2 8 l 1 0 0 1 -1 0 Z  M 4 8 l 1 0 0 1 -1 0 Z M 5 8 l 1 0 0 1 -1 0 Z M 6 8 l 1 0 0 1 -1 0 Z M 7 8 l 1 0 0 1 -1 0 Z M 8 8 l 1 0 0 1 -1 0 Z  M 10 8 l 1 0 0 1 -1 0 Z  M 12 8 l 1 0 0 1 -1 0 Z M 13 8 l 1 0 0 1 -1 0 Z M 14 8 l 1 0 0 1 -1 0 Z    M 18 8 l 1 0 0 1 -1 0 Z    M 1 9 l 1 0 0 1 -1 0 Z M 2 9 l 1 0 0 1 -1 0 Z   M 5 9 l 1 0 0 1 -1 0 Z    M 9 9 l 1 0 0 1 -1 0 Z  M 11 9 l 1 0 0 1 -1 0 Z  M 13 9 l 1 0 0 1 -1 0 Z M 14 9 l 1 0 0 1 -1 0 Z  M 16 9 l 1 0 0 1 -1 0 Z    M 20 9 l 1 0 0 1 -1 0 Z M 0 10 l 1 0 0 1 -1 0 Z  M 2 10 l 1 0 0 1 -1 0 Z  M 4 10 l 1 0 0 1 -1 0 Z M 5 10 l 1 0 0 1 -1 0 Z M 6 10 l 1 0 0 1 -1 0 Z M 7 10 l 1 0 0 1 -1 0 Z    M 11 10 l 1 0 0 1 -1 0 Z  M 13 10 l 1 0 0 1 -1 0 Z M 14 10 l 1 0 0 1 -1 0 Z  M 16 10 l 1 0 0 1 -1 0 Z M 17 10 l 1 0 0 1 -1 0 Z   M 20 10 l 1 0 0 1 -1 0 Z    M 3 11 l 1 0 0 1 -1 0 Z     M 8 11 l 1 0 0 1 -1 0 Z   M 11 11 l 1 0 0 1 -1 0 Z M 12 11 l 1 0 0 1 -1 0 Z M 13 11 l 1 0 0 1 -1 0 Z   M 16 11 l 1 0 0 1 -1 0 Z M 17 11 l 1 0 0 1 -1 0 Z  M 19 11 l 1 0 0 1 -1 0 Z M 20 11 l 1 0 0 1 -1 0 Z M 0 12 l 1 0 0 1 -1 0 Z  M 2 12 l 1 0 0 1 -1 0 Z M 3 12 l 1 0 0 1 -1 0 Z  M 5 12 l 1 0 0 1 -1 0 Z M 6 12 l 1 0 0 1 -1 0 Z M 7 12 l 1 0 0 1 -1 0 Z    M 11 12 l 1 0 0 1 -1 0 Z  M 13 12 l 1 0 0 1 -1 0 Z   M 16 12 l 1 0 0 1 -1 0 Z M 17 12 l 1 0 0 1 -1 0 Z  M 19 12 l 1 0 0 1 -1 0 Z M 20 12 l 1 0 0 1 -1 0 Z         M 8 13 l 1 0 0 1 -1 0 Z M 9 13 l 1 0 0 1 -1 0 Z  M 11 13 l 1 0 0 1 -1 0 Z  M 13 13 l 1 0 0 1 -1 0 Z   M 16 13 l 1 0 0 1 -1 0 Z    M 20 13 l 1 0 0 1 -1 0 Z M 0 14 l 1 0 0 1 -1 0 Z M 1 14 l 1 0 0 1 -1 0 Z M 2 14 l 1 0 0 1 -1 0 Z M 3 14 l 1 0 0 1 -1 0 Z M 4 14 l 1 0 0 1 -1 0 Z M 5 14 l 1 0 0 1 -1 0 Z M 6 14 l 1 0 0 1 -1 0 Z  M 8 14 l 1 0 0 1 -1 0 Z M 9 14 l 1 0 0 1 -1 0 Z M 10 14 l 1 0 0 1 -1 0 Z  M 12 14 l 1 0 0 1 -1 0 Z M 13 14 l 1 0 0 1 -1 0 Z   M 16 14 l 1 0 0 1 -1 0 Z M 17 14 l 1 0 0 1 -1 0 Z M 18 14 l 1 0 0 1 -1 0 Z  M 20 14 l 1 0 0 1 -1 0 Z M 0 15 l 1 0 0 1 -1 0 Z      M 6 15 l 1 0 0 1 -1 0 Z  M 8 15 l 1 0 0 1 -1 0 Z M 9 15 l 1 0 0 1 -1 0 Z M 10 15 l 1 0 0 1 -1 0 Z   M 13 15 l 1 0 0 1 -1 0 Z  M 15 15 l 1 0 0 1 -1 0 Z  M 17 15 l 1 0 0 1 -1 0 Z  M 19 15 l 1 0 0 1 -1 0 Z  M 0 16 l 1 0 0 1 -1 0 Z  M 2 16 l 1 0 0 1 -1 0 Z M 3 16 l 1 0 0 1 -1 0 Z M 4 16 l 1 0 0 1 -1 0 Z  M 6 16 l 1 0 0 1 -1 0 Z  M 8 16 l 1 0 0 1 -1 0 Z   M 11 16 l 1 0 0 1 -1 0 Z M 12 16 l 1 0 0 1 -1 0 Z M 13 16 l 1 0 0 1 -1 0 Z    M 17 16 l 1 0 0 1 -1 0 Z  M 19 16 l 1 0 0 1 -1 0 Z  M 0 17 l 1 0 0 1 -1 0 Z  M 2 17 l 1 0 0 1 -1 0 Z M 3 17 l 1 0 0 1 -1 0 Z M 4 17 l 1 0 0 1 -1 0 Z  M 6 17 l 1 0 0 1 -1 0 Z      M 12 17 l 1 0 0 1 -1 0 Z M 13 17 l 1 0 0 1 -1 0 Z   M 16 17 l 1 0 0 1 -1 0 Z   M 19 17 l 1 0 0 1 -1 0 Z  M 0 18 l 1 0 0 1 -1 0 Z  M 2 18 l 1 0 0 1 -1 0 Z M 3 18 l 1 0 0 1 -1 0 Z M 4 18 l 1 0 0 1 -1 0 Z  M 6 18 l 1 0 0 1 -1 0 Z  M 8 18 l 1 0 0 1 -1 0 Z M 9 18 l 1 0 0 1 -1 0 Z M 10 18 l 1 0 0 1 -1 0 Z  M 12 18 l 1 0 0 1 -1 0 Z    M 16 18 l 1 0 0 1 -1 0 Z M 17 18 l 1 0 0 1 -1 0 Z   M 20 18 l 1 0 0 1 -1 0 Z M 0 19 l 1 0 0 1 -1 0 Z      M 6 19 l 1 0 0 1 -1 0 Z  M 8 19 l 1 0 0 1 -1 0 Z  M 10 19 l 1 0 0 1 -1 0 Z   M 13 19 l 1 0 0 1 -1 0 Z    M 17 19 l 1 0 0 1 -1 0 Z  M 19 19 l 1 0 0 1 -1 0 Z  M 0 20 l 1 0 0 1 -1 0 Z M 1 20 l 1 0 0 1 -1 0 Z M 2 20 l 1 0 0 1 -1 0 Z M 3 20 l 1 0 0 1 -1 0 Z M 4 20 l 1 0 0 1 -1 0 Z M 5 20 l 1 0 0 1 -1 0 Z M 6 20 l 1 0 0 1 -1 0 Z  M 8 20 l 1 0 0 1 -1 0 Z M 9 20 l 1 0 0 1 -1 0 Z M 10 20 l 1 0 0 1 -1 0 Z  M 12 20 l 1 0 0 1 -1 0 Z M 13 20 l 1 0 0 1 -1 0 Z   M 16 20 l 1 0 0 1 -1 0 Z M 17 20 l 1 0 0 1 -1 0 Z  M 19 20 l 1 0 0 1 -1 0 Z M 20 20 l 1 0 0 1 -1 0 Z"
                                            fill="#000000"
                                        />
                                        <path
                                            d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z ... M 20 20 l 1 0 0 1 -1 0 Z"
                                            fill="#FFFFFF"
                                        />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

          
        </div>
    )
}
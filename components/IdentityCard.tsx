"use client";

import Image from "next/image";

export default function IdentityCard({ onClick }: { onClick: () => void }) {
  return (
    <div  onClick={onClick} className="relative text-xs font-sans inline-block min-w-[350px] min-h-[220px] overflow-hidden">
      
      
      <Image
        src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/id-card-front.svg"
        alt="ID Card"
        width={350}
        height={220}
        className="object-cover rounded-xl"
      />

    
      <div className="absolute z-10 text-black top-[58px] left-[104px]">
        Боржигон Шар Дугар
      </div>
      <div className="absolute z-10 text-black top-[87px] left-[104px]">
        Улам-Өрнөх
      </div>
      <div className="absolute z-10 text-black top-[114px] left-[104px]">
        БЯМБАЦЭРЭН
      </div>
      <div className="absolute z-10 text-black top-[143px] left-[104px]">
        Эрэгтэй
      </div>
      <div className="absolute z-10 text-black top-[173px] left-[104px]">
        2006/07/14
      </div>
      <div className="absolute z-10 text-black top-[194px] left-[104px]">
        675718393215
      </div>
      <Image
        src="/me.png"
        alt="Зураг"
        width={90}
        height={125}
        className="absolute z-10 top-[70px] left-[5px] object-cover"
      />
    </div>
  );
}
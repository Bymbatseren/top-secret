"use client";

export default function PassportCard({ onClick }: { onClick: () => void }) {
  return (
<div onClick={onClick}  className="relative text-xs font-sans inline-block min-w-[350px] min-h-[220px] overflow-hidden">
  
  <div className="origin-top-left scale-100">
    
    <img
      src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/passport.svg"
      width={350}
      height={220}
      className="rounded-xl object-cover"
      alt="passport"
    />
    <div className="absolute z-10 text-black top-[69px] left-[105px]">ULAM-URNUKH</div>
    <div className="absolute z-10 text-black top-[94px] left-[105px]">BYAMBATSEREN</div>
    <div className="absolute z-10 text-black top-[116px] left-[105px]">MONGOLIA</div>
    <div className="absolute z-10 text-black top-[140px] left-[105px]">KV04271414</div>
    <div className="absolute z-10 text-black top-[163px] left-[105px]">01 MAY 2025</div>
    <div className="absolute z-10 text-black top-[186px] left-[105px]">30 APR 2035</div>
    <div className="absolute z-10 text-black top-[50px] left-[105px]">PE</div>

    <img
      src="/mee.png"
      alt="Зураг"
      width={90}
      height={125}
      className="absolute z-10 top-[46px] left-[7px] object-cover"
    />

    <div className="absolute z-10 text-black top-[116px] left-[210px]">14/07/2004</div>
    <div className="absolute z-10 text-black top-[138px] left-[210px]">M</div>
    <div className="absolute z-10 text-black top-[162px] left-[210px]">
      General Authority for
    </div>
    <div className="absolute z-10 text-black top-[172px] left-[210px]">
      State Registration of
    </div>
    <div className="absolute z-10 text-black top-[182px] left-[210px]">
      Mongolia
    </div>
    <div className="absolute z-10 text-black top-[50px] left-[179px]">MNG</div>
    <div className="absolute z-10 text-black top-[50px] left-[250px]">
      PE0000910
    </div>

  </div>
</div>
  )
}

"use client";

export default function PassportCard() {
  return (
<div className="relative text-xs font-sans inline-block min-w-[350px] min-h-[220px] overflow-hidden">
  
  <div className="origin-top-left scale-100">
    
    <img
      src="https://cache.e-mongolia.mn/files/portal-v5/images/documents/passport.svg"
      width={350}
      height={220}
      className="rounded-xl object-cover"
      alt="passport"
    />

    {/* Text fields */}
    <div className="absolute z-10 text-black top-[69px] left-[105px]">ULAM-URNUKH</div>
    <div className="absolute z-10 text-black top-[94px] left-[105px]">BYAMBATSEREN</div>
    <div className="absolute z-10 text-black top-[116px] left-[105px]">MONGOLIA</div>
    <div className="absolute z-10 text-black top-[140px] left-[105px]">KV04271414</div>
    <div className="absolute z-10 text-black top-[163px] left-[105px]">01 MAY 2025</div>
    <div className="absolute z-10 text-black top-[186px] left-[105px]">30 APR 2035</div>
    <div className="absolute z-10 text-black top-[50px] left-[105px]">PE</div>

    {/* Profile image */}
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

function SmallField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[8px] uppercase mb-0.5" style={{ color: "#6366f1" }}>
        {label}
      </p>
      <p className="text-[11px] font-semibold text-slate-200">{value}</p>
    </div>
  );
}

function MongolianFlag() {
  return (
    <div
      className="w-7 h-[18px] rounded-sm relative overflow-hidden flex-shrink-0"
      style={{
        background: "linear-gradient(to right,#c8102e 33%,#006747 33%,#006747 66%,#c8102e 66%)",
      }}
    >
      <div
        className="absolute rounded-sm"
        style={{
          left: 4,
          top: "50%",
          transform: "translateY(-50%)",
          width: 6,
          height: 12,
          background: "#f5a623",
        }}
      />
    </div>
  );
}

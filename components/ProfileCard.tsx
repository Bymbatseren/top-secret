"use client";

export default function ProfileCard() {
  return (
    <div
      className="rounded-2xl p-4 mb-4 flex items-center gap-3.5 border"
      style={{ background: "#1e1e3a", borderColor: "#2d2d50" }}
    >
      {/* Photo */}
      <div
        className="w-[70px] h-20 rounded-xl flex items-center justify-center text-3xl border-2 flex-shrink-0 overflow-hidden"
        style={{ background: "#2a2a4a", borderColor: "#6366f1" }}
      >
        👤
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-bold text-sm leading-snug mb-1" style={{ color: "#818cf8" }}>
          Улам-Өрнөх
          <br />
          Бямбацэрэн
        </p>
        <p className="text-xs" style={{ color: "#64748b" }}>
          675718393215@e-mongolia.mn
        </p>
      </div>

      {/* Gear */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm cursor-pointer flex-shrink-0"
        style={{ background: "#2563eb" }}
      >
        ⚙️
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function TabButtons() {
  const [active, setActive] = useState(0);

  const tabs = ["Төрд байгаа миний мэдээлэл", "Бичиг баримт"];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className="flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all"
          style={
            active === i
              ? { background: "#6366f1", color: "#fff" }
              : {
                  background: "#1e1e3a",
                  color: "#94a3b8",
                  border: "1px solid #2d2d50",
                }
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

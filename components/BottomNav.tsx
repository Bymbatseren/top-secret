"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons/home.svg", label: "Нүүр", href: "/" },
  { icon: "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons/services.svg", label: "Үйлчилгээ", href: "/" },
  { icon: "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons/news.svg", label: "Мэдээ", href: "/" },
  { icon: "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons/organization.svg", label: "Байгуулга", href: "/" },
  { icon: "https://cache.e-mongolia.mn/files/portal-v5/images/menu-icons/other.svg", label: "Бусад", href: "/" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 w-full max-w-[425px] border-t flex justify-around py-2 pb-3"
      style={{ background: "#12122a", borderColor: "#222240" }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-0.5 min-w-[60px]"
          >
            <img src={item.icon}></img>
            <span
              className="text-[10px] text-foreground tertiary-medium"
              style={{ color: isActive ? "#6366f1" : "#64748b" }}
            >
              {item.label}
            </span>
            
          </Link>
        );
      })}
    </nav>
  );
}

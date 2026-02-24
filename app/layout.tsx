import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eMongolia - Профайл",
  description: "eMongolia цахим үйлчилгээ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className="min-h-screen flex justify-center" style={{ background: "#0f0f1a" }}>
        <div className="w-full max-w-[425px] relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

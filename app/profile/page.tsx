"use client"
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import EcoCard from "@/components/EcoCard";
import ProfileCard from "@/components/ProfileCard";
import TabButtons from "@/components/TabButtons";
import IdentityCard from "@/components/IdentityCard";
import PassportCard from "@/components/PassportCard";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import ModalWrapper from "@/components/modal";
import { useState } from "react";
import Modal from "@/components/modal";

export default function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Header />

      {/* Scrollable content */}
      <main className="px-4 pt-4 pb-24 bg-[#0F172A]">
        <h1 className="text-2xl font-bold text-slate-100 mb-3.5">Профайл</h1>

        <EcoCard />
      




        <button
          className="mt-10 flex items-center border-[#3B82F6] border-[1px] gap-2 rounded-full px-4 py-2 text-sm mb-4 ] cursor-pointer"
          style={{
            background: "#1E2A40",
            borderColor: "#2d2d50",
            color: "#818cf8",
          }}
        >
          <span className="text-[18px] text-[#3B82F6] w-[18px] h-[18px] -ml-1!"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="currentColor" className="">
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2716 2 18.1763 3.57111 20.0007 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            </path>
          </svg></span>
          <span className="text-[#3B82F6]">Шинэчлэх</span>
        </button>

        <IdentityCard onClick={() => setModalOpen(true)} />

        <div className="h-4"></div>
        <PassportCard />
        <div className=" md:flex-row justify-between gap-12 mt-[300px] ">


          <div className="gap-4 ">
            <img
              src="https://e-mongolia.mn/images/emon-logo-dark.svg"
              alt="E-Mongolia"
              width={150}
              height={32}
            />

            <div className="flex mt-5 gap-2">
              <img
                src="https://e-mongolia.mn/images/social/app-store.svg"
                alt="App Store-оос татах"
                width={120}
                height={36}
              />
              <img
                src="https://e-mongolia.mn/images/social/google-play.svg"
                alt="Google Play-ээс татах"
                width={120}
                height={36}
              />
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className=" gap-8">

            {/* Тусламж */}
            <div className="flex gap-5 mt-6">
              <div>
                <h4 className="font-semibold mb-4">Тусламж</h4>
                <ul className="text-gray-500 space-y-2">
                  <li className="cursor-pointer">Knowledge Graph</li>
                  <li><a href="/faq">Түгээмэл асуулт, хариулт</a></li>
                </ul>
              </div>

              {/* Бидний тухай */}
              <div>
                <h4 className="font-semibold mb-4">Бидний тухай</h4>
                <ul className="text-gray-500 space-y-2">
                  <li><a href="/org/e-mongolia">И-Монгол Академи</a></li>
                  <li><a href="/org/mddic">ЦХИХХЯ-ний тухай</a></li>
                  <li><a href="/about-us">Системийн тухай</a></li>
                  <li><a href="/privacy-policy">Үйлчилгээний нөхцөл</a></li>
                </ul>
              </div>
            </div>

            {/* Бусад */}
            <div className="flex gap-5 mt-10">
              <div>
                <h4 className="font-semibold mb-4">Бусад</h4>
                <ul className="text-gray-500 space-y-2">
                  <li><a href="/esh-khurug">Чингис хааны иш хөрөг</a></li>
                  <li><a href="/civil-servant">Төрийн албан хаагч цэс</a></li>
                  <li><a href="/check">Лавлагаа шалгах</a></li>
                  <li><a href="/anti-corruption">АТГ-д хандах</a></li>
                </ul>
              </div>

              {/* Хандалтын тоо */}
              <div>
                <h4 className="font-semibold mb-4">Хандалтын тоо</h4>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex justify-between">
                    <span>Сүүлийн 24 цаг:</span> <span>46,916</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Сүүлийн 7 хоног:</span> <span>155,403</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Сүүлийн сар:</span> <span>1,957,025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Нийт:</span> <span>9,846,570</span>
                  </li>
                </ul>

                <img
                  src="https://cache.e-mongolia.mn/files/portal-v5/images/ga/ga-logo.svg"
                  alt="Google Analytics"
                  width={168}
                  height={32}
                  className="mt-4"
                />
              </div>
            </div>

          </div>
        </div>
        <div className="border-t flex justify-center items-end  border-gray-700 text-white  ">

          <div className="mt-5">
            {/* Social icons */}
            <div className="flex gap-3 justify-center items-center">
              <a
                href="https://www.facebook.com/emongolia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://e-mongolia.mn/images/social/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://x.com/emnongoliamn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://e-mongolia.mn/images/social/x.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.instagram.com/emongolia.mn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://e-mongolia.mn/images/social/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.youtube.com/@emongoliaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 3.25C9.52631 3.25 7.17304 3.40962 5.04751 3.69767C2.78476 4.0043 1.25 5.99235 1.25 8.19868V15.8013C1.25 18.0076 2.78476 19.9957 5.04751 20.3023C7.17304 20.5904 9.52631 20.75 12 20.75C14.4737 20.75 16.827 20.5904 18.9525 20.3023C21.2152 19.9957 22.75 18.0076 22.75 15.8013V8.19869C22.75 5.99235 21.2152 4.0043 18.9525 3.69767C16.827 3.40962 14.4737 3.25 12 3.25ZM10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm flex gap-3 justify-center items-center">
              © Бүх эрх хуулиар хамгаалагдсан 2026 он.
            </p>
          </div>

        </div>
      </main>


      {/* FAB group */}
      <div className="fixed right-4 bottom-20 flex flex-col gap-2">
        {[
          { icon: "👤", bg: "#2563eb" },
          { icon: "🎧", bg: "#334155" },
          { icon: "🤖", bg: "#334155" },
        ].map((fab, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-full flex items-center justify-center text-base shadow-lg"
            style={{ background: fab.bg }}
          >
            {fab.icon}
          </button>
        ))}
      </div>
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />

      <BottomNav />
    </>
  );
}

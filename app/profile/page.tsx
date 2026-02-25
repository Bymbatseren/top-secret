"use client"
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import EcoCard from "@/components/EcoCard";
import ProfileCard from "@/components/ProfileCard";
import TabButtons from "@/components/TabButtons";
import IdentityCard from "@/components/IdentityCard";
import PassportCard from "@/components/PassportCard";
import BottomNav from "@/components/BottomNav";
import ModalWrapper from "@/components/modal";
import { useState } from "react";
import Modal from "@/components/modal";
import Modal2 from "@/components/modal2";

export default function ProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-10">

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0D1E3E] opacity-60 shadow-[0_0_12px_#0D1E3E] pointer-events-none"></div>


        <div className="bg-header-bg border-b border-[#0D1E3E] shadow-[0_2px_32px_rgba(0,0,0,0.08)]">
          <TopBar />
          <Header />
        </div>
      </div>

      <main className="px-4 pt-12 pb-24 bg-[#0F172A]">
        <h1 className="text-[20px] font-bold text-slate-100 mb-3.5">Профайл</h1>

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
        <PassportCard onClick={()=>setModalOpen2(true)} />
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


          <div className=" gap-8">


            <div className="flex gap-5 mt-6">
              <div>
                <h4 className="font-semibold mb-4">Тусламж</h4>
                <ul className="text-gray-500 space-y-2">
                  <li className="cursor-pointer">Knowledge Graph</li>
                  <li><a href="/faq">Түгээмэл асуулт, хариулт</a></li>
                </ul>
              </div>


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
      <div className="fixed right-4 bottom-20 flex flex-col gap-2">
        {[
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="h-6 w-6! self-center!"><path d="M4 11.75C4 9.95507 5.45507 8.5 7.25 8.5C9.04493 8.5 10.5 9.95507 10.5 11.75C10.5 13.5449 9.04493 15 7.25 15C5.45507 15 4 13.5449 4 11.75ZM1 21.75C1 18.5087 3.86708 16 7.25 16C10.6329 16 13.5 18.5087 13.5 21.75C13.5 22.1642 13.1642 22.5 12.75 22.5H1.75C1.33579 22.5 1 22.1642 1 21.75Z" fill="currentColor" fill-rule="evenodd"></path><path d="M16.75 1C13.6063 1 11 3.44659 11 6.53335C11 8.01184 11.6034 9.35104 12.5752 10.3381C12.5912 10.3544 12.6271 10.4074 12.6271 10.4074C12.5652 10.7108 12.4325 10.9909 12.2435 11.2235C12.0766 11.4288 12.0303 11.7069 12.1216 11.9553C12.2129 12.2036 12.4283 12.3855 12.6885 12.4339C13.5791 12.5995 14.5008 12.4499 15.29 12.0302C15.3731 11.986 15.4309 11.9553 15.4744 11.9331C15.5145 11.9402 15.5859 11.9533 15.6442 11.9643C16.0087 12.0327 16.3786 12.0671 16.75 12.0667C19.8936 12.0667 22.5 9.6201 22.5 6.53335C22.5 3.44658 19.8936 1 16.75 1ZM17.5084 4.75C17.5084 4.33579 17.1726 4 16.7584 4C16.3442 4 16.0084 4.33579 16.0084 4.75V6.74999C16.0084 7.1642 16.3442 7.49999 16.7584 7.49999C17.1726 7.49999 17.5084 7.1642 17.5084 6.74999V4.75ZM16.75 7.99998C16.3358 7.99998 16 8.33577 16 8.74998C16 9.1642 16.3358 9.49998 16.75 9.49998H16.7581C17.1723 9.49998 17.5081 9.1642 17.5081 8.74998C17.5081 8.33577 17.1723 7.99998 16.7581 7.99998H16.75Z" fill="currentColor" fill-rule="evenodd"></path></svg>, bg: "#3A3A3A" },
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="h-6 w-6! self-center!"><path d="M12.0002 4C8.74885 4 6.31489 6.09486 6.02849 8.52063C6.15063 8.57303 6.26834 8.62684 6.37501 8.67566C6.73116 8.83478 7.40272 9.13482 7.6585 9.89191C7.75152 10.1672 7.75079 10.4616 7.75011 10.7355V15.2645C7.75079 15.5384 7.75152 15.8327 7.6585 16.1081C7.40272 16.8652 6.73116 17.1652 6.37501 17.3243C6.0121 17.4904 5.52133 17.7144 5.16362 17.7434C4.76625 17.7755 4.36396 17.6906 4.01491 17.4947C3.69791 17.3168 3.45992 17.0265 3.21887 16.7323C3.13171 16.6265 2.96671 16.4318 2.85082 16.2975L2.8508 16.2975L2.8508 16.2975L2.85075 16.2975C2.63889 16.052 2.39839 15.7733 2.20005 15.5137C1.8724 15.0849 1.54407 14.5711 1.38098 13.9741C1.20634 13.3348 1.20634 12.6652 1.38098 12.0259C1.49932 11.5927 1.71345 11.2104 1.99611 10.8091C2.26984 10.4205 2.73604 9.85098 3.19205 9.29711L3.19206 9.2971C3.26558 9.20386 3.36665 9.07569 3.44139 8.99009C3.57673 8.83505 3.76401 8.64608 4.01491 8.50526L4.0196 8.50263C4.31352 4.74952 7.91074 2 12.0002 2C16.0897 2 19.6869 4.74952 19.9809 8.50264L19.9855 8.50526C20.2364 8.64608 20.4237 8.83505 20.5591 8.99009C20.6338 9.07569 20.7349 9.20386 20.8084 9.2971L20.8084 9.29711C21.2644 9.85098 21.7306 10.4205 22.0044 10.8091C22.287 11.2104 22.5011 11.5927 22.6195 12.0259C22.7941 12.6652 22.7941 13.3348 22.6195 13.9741C22.4564 14.5711 22.1281 15.0849 21.8004 15.5137C21.6021 15.7733 21.3616 16.052 21.1497 16.2975L21.1497 16.2975L21.1496 16.2975C21.0338 16.4318 20.8688 16.6265 20.7816 16.7323L20.7816 16.7324C20.5443 17.0219 20.3099 17.3078 20.0002 17.4864V17.8C20.0002 20.3163 17.5419 22 15.0002 22H13.0002C12.4479 22 12.0002 21.5523 12.0002 21C12.0002 20.4477 12.4479 20 13.0002 20H15.0002C16.8768 20 18.0002 18.8183 18.0002 17.8V17.4914C17.868 17.4353 17.7403 17.3769 17.6255 17.3243C17.2693 17.1652 16.5977 16.8652 16.342 16.1081C16.2489 15.8327 16.2497 15.5384 16.2503 15.2645V10.7355C16.2497 10.4616 16.2489 10.1672 16.342 9.89191C16.5977 9.13482 17.2693 8.83478 17.6255 8.67566C17.7321 8.62684 17.8498 8.57303 17.972 8.52063C17.6856 6.09486 15.2516 4 12.0002 4Z" fill="currentColor" fill-rule="evenodd"></path></svg>, bg: "#3A3A3A" },
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="h-6 w-6! self-center!"><path d="M12 1.25C10.7574 1.25 9.75 2.25736 9.75 3.5C9.75 4.47966 10.3761 5.31309 11.25 5.62197V7.25H7C5.48122 7.25 4.25 8.48122 4.25 10V20C4.25 21.5188 5.48122 22.75 7 22.75H17C18.5188 22.75 19.75 21.5188 19.75 20V10C19.75 8.48122 18.5188 7.25 17 7.25H12.75V5.62197C13.6239 5.31309 14.25 4.47966 14.25 3.5C14.25 2.25736 13.2426 1.25 12 1.25ZM1.25 13C1.25 12.0335 2.0335 11.25 3 11.25L3 18.75C2.0335 18.75 1.25 17.9665 1.25 17V13ZM21 11.25C21.9665 11.25 22.75 12.0335 22.75 13V17C22.75 17.9665 21.9665 18.75 21 18.75V11.25ZM9 11.25C9.41421 11.25 9.75 11.5858 9.75 12V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V12C8.25 11.5858 8.58579 11.25 9 11.25ZM15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.5858 11.25 14.25 11.5858 14.25 12V13C14.25 13.4142 14.5858 13.75 15 13.75C15.4142 13.75 15.75 13.4142 15.75 13V12ZM10.4927 16.4244C10.545 16.4538 10.6352 16.4997 10.7634 16.5477C11.0183 16.6433 11.4293 16.75 12 16.75C12.5708 16.75 12.9818 16.6433 13.2367 16.5477C13.3648 16.4997 13.4551 16.4538 13.5073 16.4244L13.56 16.3927C13.8907 16.1528 14.354 16.2219 14.6 16.55C14.8486 16.8814 14.7814 17.3515 14.45 17.6L14.3803 17.6485C14.3458 17.6712 14.2999 17.6996 14.2427 17.7318C14.1284 17.7961 13.9686 17.8753 13.7634 17.9522C13.3516 18.1066 12.7626 18.25 12 18.25C11.2375 18.25 10.6485 18.1066 10.2367 17.9522C10.0315 17.8753 9.87172 17.7961 9.75735 17.7318C9.70017 17.6996 9.65432 17.6712 9.6198 17.6485L9.55004 17.6C9.21867 17.3515 9.15152 16.8814 9.40004 16.55C9.64599 16.2221 10.1089 16.1529 10.4397 16.3923L10.4927 16.4244Z" fill="currentColor" fill-rule="evenodd"></path></svg>, bg: "#3A3A3A" },
        ].map((fab, i) => (
          <button
            key={i}
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-base shadow-lg"
            style={{ background: "#212121" }}
          >
            {fab.icon}
          </button>
        ))}
      </div>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
      <Modal2 isOpen={modalOpen2} setIsOpen={setModalOpen2} />

      <BottomNav />
    </>
  );
}

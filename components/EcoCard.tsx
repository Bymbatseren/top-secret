"use client";

export default function EcoCard() {
  return (
    <div>
      <div className="relative text-[15px] font-medium h-[234px] rounded-[20px] bg-[#1A314D] overflow-hidden flex flex-col lg:gap-4 gap-1 justify-center items-center px-14 py-1">
        <img alt="Нүүр хуудас" loading="eager" width="171" height="174" decoding="async" data-nimg="1" className="absolute top-[52px] -left-[31px]" src="https://cache.e-mongolia.mn/files/portal-v5/images/profile/tree.svg" style={{ color: 'transparent', objectFit: 'cover' }} />
        <img alt="Нүүр хуудас" loading="eager" width="171" height="174" decoding="async" data-nimg="1" className="absolute bottom-0 -right-[57px]" src="https://cache.e-mongolia.mn/files/portal-v5/images/profile/tree.svg" style={{ color: 'transparent', objectFit: 'cover' }} />
        <div className="body-medium flex flex-row gap-1 flex-wrap justify-center text-center pl-6">
          Нийт
          <span className="text-[#3667AA]">17,000</span>
          <img alt="Нүүр хуудас" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://cache.e-mongolia.mn/files/portal-v5/images/profile/little-tree.svg" style={{ color: 'transparent', objectFit: 'cover' }} />
          <span className="body-semibold text-[#3667AA]"> 1.4 сая тонн </span>
          <img alt="Нүүр хуудас" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="https://cache.e-mongolia.mn/files/portal-v5/images/profile/raindrops.svg" style={{ color: 'transparent', objectFit: 'cover' }} />
          <span className="text-wrap">хэмнэн эх дэлхийгээ хайрлахад хувь нэмрээ оруулсан танд баярлалаа.</span>
        </div>
        <div className=" gap-y-3 lg:h-[92px] items-center w-full rounded-2xl">
          <div className="flex flex-col gap-1 lg:gap-2 items-center">
            <p className="h6-gilroy text-primary lg:font-adineue lg:font-bold lg:text-2xl text-[#3667AA]">22</p>
            <p className="tertiary-medium text-text-muted lg:tertiary-semibold lg:text-[14px]">үйлчилгээ</p>
          </div>
          <div className="flex flex-col gap-1 lg:gap-2 items-center">
            <p className="h6-gilroy text-primary lg:font-adineue lg:font-bold lg:text-2xl text-[#3667AA]">186,208₮</p>
            <p className="tertiary-medium text-text-muted lg:tertiary-semibold lg:text-[14px]">төгрөг</p>
          </div>
          <div className="flex flex-col gap-1 lg:gap-2 items-center">
            <p className="h6-gilroy text-primary lg:font-adineue lg:font-bold lg:text-2xl text-[#3667AA]">3036</p>
            <p className="tertiary-medium text-text-muted lg:tertiary-semibold lg:text-[14px]">цаг</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-b border-border-disabled pb-3 -mt-8">
        <div className="flex flex-row gap-4 items-center px-5 sm:px-0 md:px-5">
          <div className="relative bg-linear-[135deg,white_0%,#296AED_28%,#9AD1FF_50%,#9ECFFF_73%,white] min-w-[120px] h-[120px] rounded-xl">
            <div className="absolute top-[5px] left-[5px] rounded-xl overflow-hidden w-[110px] h-[110px] inline-flex justify-center">
              <img alt="Нүүр зураг" width="110" height="110" decoding="async" data-nimg="1" src="./me.png" className="object-cover"></img>
            </div>
            <img alt="Нүүр зураг" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="https://cache.e-mongolia.mn/files/portal-v5/images/profile/soyombo.svg" className="absolute bottom-0 right-0 rounded-xl color: transparent; object-fit: cover;"></img>
          </div><div className="flex-grow pt-10 flex justify-between">
            <div className="flex flex-col gap-2">
              <p className=" text-[#3667AA] font-bold">Улам-Өрнөх Бямбацэрэн</p>
              <p className="text-[13px] font-bold">615718393215@e-mongolia.mn</p></div><a href="/profile/settings">
              <button className="overflow-hidden whitespace-nowrap rounded-full cursor-pointer gap-2 transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-primary text-white hover:bg-primary/92 focus:bg-primary-dark-1 active:bg-primary-dark-1 disabled:bg-slate-200 disabled:text-slate-400 p-[9px] h-9! w-9! inline-flex items-center justify-center lg:px-[14px]! lg:w-min! sub-semibold bg-[#377AE5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="" stroke-width="1.5" stroke="currentColor">
              <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5"></path>
              <path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                </path>
                </svg>
                <p className="hidden lg:flex!">Тохиргоо</p>
                </button></a>
                </div></div><div className="relative"><div className="flex flex-row gap-2 mx-5 ">
                <a href="/profile">
                <button className="whitespace-nowrap w-min! cursor-pointer gap-2 transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-transparent hover:bg-primary/8 focus:bg-primary/12 active:primary/10 disabled:bg-transparent disabled:text-slate-400 px-[14px] h-[36px] sub-semibold inline-flex items-center justify-center rounded-lg text-foreground">Төрд байгаа миний мэдээлэл</button>
                </a>
                <a href="/profile">
                  <button className="whitespace-nowrap  cursor-pointer gap-2  duration-300 ease-in-out disabled:cursor-not-allowed     px-[14px] h-[36px] sub-semibold inline-flex items-center justify-center rounded-lg  bg-[#1A314D]">Бичиг баримт</button>
                </a><a href="/profile/national-post">
        
                  </a></div>
                  <button className="whitespace-nowrap rounded-full bg-[#1E2A40] cursor-pointer gap-2 ease-in-out disabled:cursor-not-allowed bg-button-secondary-bg text-foreground border-[1.5px] border-border-tertiary disabled:text-text-muted p-[9px] h-9! w-9! items-center justify-center absolute top-1/2 right-0 z-10 -translate-y-1/2 flex transition-all duration-200 opacity-100">
                  
                  <span className="  text-[18px] w-[18px] h-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="currentColor" className="" stroke-width="1.5" stroke="currentColor">
                    <path d="M15 6L9 12.0001L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                    </svg>
                    </span>
                    </button>
                    <button className="whitespace-nowrap rounded-full bg-[#1E2A40] cursor-pointer gap-2 ease-in-out disabled:cursor-not-allowed bg-button-secondary-bg text-foreground border-[1.5px] border-border-tertiary disabled:text-text-muted p-[9px] h-9! w-9! items-center justify-center absolute top-1/2 right-0 z-10 -translate-y-1/2 flex transition-all duration-200 opacity-100"><span className="text-[18px] w-[18px] h-[18px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="currentColor" className="" stroke-width="1.5" stroke="currentColor"><path d="M9.00005 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg></span></button></div></div>
    </div>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <span className="block text-2xl font-black" style={{ color }}>
        {value}
      </span>
      <span className="text-xs" style={{ color: "#86efac" }}>
        {label}
      </span>
    </div>
  );
}

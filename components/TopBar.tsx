"use client";

export default function TopBar() {
  const today = new Date()

  const month = today.getMonth() + 1  // 0-оос эхэлдэг тул +1
  const day = today.getDate()
  return (
    <div
      className=" items-center justify-between px-3.5 py-2 text-xs border-b "
      style={{ background: "#03102F", borderColor: "#2a2a3e", color: "#aaa" }}
    >
      <div className="flex text-white  gap-4">
        <div className="font-[500] text-[14px]">
          For Foreigners
        </div>
        <div className="text-[14px] font-[500]">
          Монгол бичгийн хувилбар
        </div>
      </div>
      <div className="flex text-white gap-10 mt-5">
        <div className="flex items-center gap-1">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="#FACC15" className="" stroke-width="1" stroke="currentColor"><path d="M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20H7C4.23858 20 2 17.7614 2 15C2 12.4003 3.98398 10.2641 6.52042 10.0227M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M9 5.65468C8.30552 4.65451 7.15088 4 5.84388 4C3.72096 4 2 5.72674 2 7.85679C2 9.15354 2.63783 10.3008 3.61588 11" stroke="currentColor" stroke-width="1"></path></svg>
        <span className="font-[500]">-7.9°C</span>
      </div>
      <div className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="#22C55E" className="" stroke-width="1" stroke="currentColor"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1"></path><path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="currentColor" stroke-linecap="round" stroke-width="1"></path></svg>
        <span className="font-[500]" style={{ color: "white" }}>3,565₮</span>
      </div>
      <div className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="#2563EB" className=""><path d="M7.6125 1.25C8.15098 1.25 8.5875 1.68754 8.5875 2.22727V3.20455H15.4125V2.22727C15.4125 1.68754 15.849 1.25 16.3875 1.25C16.926 1.25 17.3625 1.68754 17.3625 2.22727V3.20455H18.825C20.4404 3.20455 21.75 4.51717 21.75 6.13636V19.8182C21.75 21.4374 20.4404 22.75 18.825 22.75H5.175C3.55957 22.75 2.25 21.4374 2.25 19.8182V6.13636C2.25 4.51717 3.55957 3.20455 5.175 3.20455H6.6375V2.22727C6.6375 1.68754 7.07403 1.25 7.6125 1.25ZM19.7999 9.75H4.19995V19.8182C4.19995 20.3579 4.63647 20.7955 5.17495 20.7955H18.8249C19.3634 20.7955 19.7999 20.3579 19.7999 19.8182V9.75Z" fill="currentColor" fill-rule="evenodd"></path><path d="M10 13.2734C10 12.7212 10.4477 12.2734 11 12.2734H16C16.5523 12.2734 17 12.7212 17 13.2734C17 13.8257 16.5523 14.2734 16 14.2734H11C10.4477 14.2734 10 13.8257 10 13.2734ZM7 13.2734C7 12.7212 7.44772 12.2734 8 12.2734H8.00898C8.56127 12.2734 9.00898 12.7212 9.00898 13.2734C9.00898 13.8257 8.56127 14.2734 8.00898 14.2734H8C7.44772 14.2734 7 13.8257 7 13.2734ZM7 17.2734C7 16.7212 7.44772 16.2734 8 16.2734H13C13.5523 16.2734 14 16.7212 14 17.2734C14 17.8257 13.5523 18.2734 13 18.2734H8C7.44772 18.2734 7 17.8257 7 17.2734ZM14.991 17.2734C14.991 16.7212 15.4387 16.2734 15.991 16.2734H16C16.5523 16.2734 17 16.7212 17 17.2734C17 17.8257 16.5523 18.2734 16 18.2734H15.991C15.4387 18.2734 14.991 17.8257 14.991 17.2734Z" fill="currentColor" fill-rule="evenodd"></path></svg>
        <span className="sub-medium text-white text-6 font-[500]">{month} сарын {day}</span>
      </div>
      </div>
    </div>
  );
}

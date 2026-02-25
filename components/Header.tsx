"use client";

export default function Header() {
  return (
    <div
      className="flex items-center justify-between px-4 py-2.5   "
      style={{ background: "#03102F", borderColor: "#222240" }}
    >

      <div className="flex items-center gap-2">
        <img alt="E-Mongolia" loading="lazy" width="150" height="32" decoding="async" data-nimg="1" src="https://e-mongolia.mn/images/emon-logo-dark.svg" className="color: transparent;"></img>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className=""><path d="M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12Z" fill="currentColor"></path><path d="M12 1C12.5523 1 13 1.44772 13 2V3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5V2C11 1.44772 11.4477 1 12 1ZM4.22149 4.22149C4.61202 3.83097 5.24518 3.83097 5.6357 4.22149L6.69636 5.28215C7.08689 5.67268 7.08689 6.30584 6.69636 6.69636C6.30584 7.08689 5.67268 7.08689 5.28215 6.69636L4.22149 5.6357C3.83097 5.24518 3.83097 4.61201 4.22149 4.22149ZM19.7784 4.2216C20.1689 4.61213 20.1689 5.24529 19.7784 5.63582L18.7177 6.69648C18.3272 7.087 17.694 7.087 17.3035 6.69648C16.913 6.30595 16.913 5.67279 17.3035 5.28226L18.3642 4.2216C18.7547 3.83108 19.3879 3.83108 19.7784 4.2216ZM1 12C1 11.4477 1.44772 11 2 11H3.5C4.05228 11 4.5 11.4477 4.5 12C4.5 12.5523 4.05228 13 3.5 13H2C1.44772 13 1 12.5523 1 12ZM19.5 12C19.5 11.4477 19.9477 11 20.5 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.5C19.9477 13 19.5 12.5523 19.5 12ZM17.303 17.3035C17.6936 16.913 18.3267 16.913 18.7172 17.3035L19.7779 18.3642C20.1684 18.7547 20.1684 19.3879 19.7779 19.7784C19.3874 20.1689 18.7542 20.1689 18.3637 19.7784L17.303 18.7177C16.9125 18.3272 16.9125 17.694 17.303 17.3035ZM6.69685 17.3036C7.08738 17.6942 7.08738 18.3273 6.69685 18.7178L5.63619 19.7785C5.24567 20.169 4.6125 20.169 4.22198 19.7785C3.83145 19.388 3.83145 18.7548 4.22198 18.3643L5.28264 17.3036C5.67316 16.9131 6.30633 16.9131 6.69685 17.3036ZM12 19.5C12.5523 19.5 13 19.9477 13 20.5V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.5C11 19.9477 11.4477 19.5 12 19.5Z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </div>

      <div className="flex items-center gap-2.5">

        <button>
          <div className="h-10 w-10  border-blue-600  border-2  rounded-full overflow-hidden flex items-center justify-center">
            <img alt="Нүүр зураг" width="40" height="40" decoding="async" data-nimg="1" src="./me.png" className="color: transparent;"></img>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" color="currentColor" className="absolute border-[#2A3B55] bg-[#1E2A40] bottom-3 right-28 text-foreground h-4 w-4 rounded-full border border-border-tertiary bg-button-secondary-bg" stroke-width="1.5" stroke="currentColor"><path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke="currentColor" stroke-width="1.5"></path></svg>
          </div>
        </button>
        <button className=" rounded-full cursor-pointer gap-2 transition-all duration-300 bg-[#2A3B55]  hover:text-white p-[9px] h-9! w-9! inline-flex items-center justify-center text-primary">
          <span className="text-5  w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="text-[#3b82f6]"><path d="M10.4922 18C10.4922 17.1716 11.1638 16.5 11.9922 16.5H12.0012C12.8296 16.5 13.5012 17.1716 13.5012 18C13.5012 18.8284 12.8296 19.5 12.0012 19.5H11.9922C11.1638 19.5 10.4922 18.8284 10.4922 18Z" fill="currentColor" fill-rule="evenodd"></path><path d="M16.4922 18C16.4922 17.1716 17.1638 16.5 17.9922 16.5H18.0012C18.8296 16.5 19.5012 17.1716 19.5012 18C19.5012 18.8284 18.8296 19.5 18.0012 19.5H17.9922C17.1638 19.5 16.4922 18.8284 16.4922 18Z" fill="currentColor" fill-rule="evenodd"></path><path d="M4.49981 18C4.49981 17.1716 5.17138 16.5 5.99981 16.5H6.00879C6.83722 16.5 7.50879 17.1716 7.50879 18C7.50879 18.8284 6.83722 19.5 6.00879 19.5H5.99981C5.17138 19.5 4.49981 18.8284 4.49981 18Z" fill="currentColor" fill-rule="evenodd"></path><path d="M10.4922 12C10.4922 11.1716 11.1638 10.5 11.9922 10.5H12.0012C12.8296 10.5 13.5012 11.1716 13.5012 12C13.5012 12.8284 12.8296 13.5 12.0012 13.5H11.9922C11.1638 13.5 10.4922 12.8284 10.4922 12Z" fill="currentColor" fill-rule="evenodd"></path><path d="M10.4961 6C10.4961 5.17157 11.1677 4.5 11.9961 4.5H12.0051C12.8335 4.5 13.5051 5.17157 13.5051 6C13.5051 6.82843 12.8335 7.5 12.0051 7.5H11.9961C11.1677 7.5 10.4961 6.82843 10.4961 6Z" fill="currentColor" fill-rule="evenodd"></path><path d="M16.4922 12C16.4922 11.1716 17.1638 10.5 17.9922 10.5H18.0012C18.8296 10.5 19.5012 11.1716 19.5012 12C19.5012 12.8284 18.8296 13.5 18.0012 13.5H17.9922C17.1638 13.5 16.4922 12.8284 16.4922 12Z" fill="currentColor" fill-rule="evenodd"></path><path d="M16.4922 6C16.4922 5.17157 17.1638 4.5 17.9922 4.5H18.0012C18.8296 4.5 19.5012 5.17157 19.5012 6C19.5012 6.82843 18.8296 7.5 18.0012 7.5H17.9922C17.1638 7.5 16.4922 6.82843 16.4922 6Z" fill="currentColor" fill-rule="evenodd"></path><path d="M4.49981 12C4.49981 11.1716 5.17138 10.5 5.99981 10.5H6.00879C6.83722 10.5 7.50879 11.1716 7.50879 12C7.50879 12.8284 6.83722 13.5 6.00879 13.5H5.99981C5.17138 13.5 4.49981 12.8284 4.49981 12Z" fill="currentColor" fill-rule="evenodd"></path><path d="M4.49981 6C4.49981 5.17157 5.17138 4.5 5.99981 4.5H6.00879C6.83722 4.5 7.50879 5.17157 7.50879 6C7.50879 6.82843 6.83722 7.5 6.00879 7.5H5.99981C5.17138 7.5 4.49981 6.82843 4.49981 6Z" fill="currentColor" fill-rule="evenodd"></path></svg>
          </span>
        </button>
        <button className=" rounded-full cursor-pointer gap-2 transition-all duration-300 bg-[#2A3B55]  hover:text-white p-[9px] h-9! w-9! inline-flex items-center justify-center text-primary">
          <span className="text-5  w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" color="currentColor" className="text-[#3b82f6]"><path d="M10 4.5C10 3.39543 10.8954 2.5 12 2.5C13.1046 2.5 14 3.39543 14 4.5C14 5.60457 13.1046 6.5 12 6.5C10.8954 6.5 10 5.60457 10 4.5Z" fill="currentColor"></path><path d="M6.62478 6.21921C6.19354 5.87417 5.56424 5.94405 5.21921 6.37529C4.87417 6.80653 4.94405 7.43583 5.37529 7.78087C6.52273 8.69894 7.93625 9.37381 9.50016 9.72528V14.4172L8.51376 20.3356C8.42297 20.8804 8.79099 21.3956 9.33576 21.4864C9.88053 21.5772 10.3958 21.2092 10.4865 20.6644L11.3473 15.5H12.653L13.5138 20.6644C13.6046 21.2092 14.1198 21.5772 14.6646 21.4864C15.2093 21.3956 15.5773 20.8804 15.4865 20.3356L14.5002 14.4172V9.72522C16.064 9.37374 17.4774 8.69889 18.6248 7.78087C19.056 7.43583 19.1259 6.80653 18.7809 6.37529C18.4358 5.94405 17.8065 5.87417 17.3753 6.21921C16.0165 7.30637 14.1223 8.00004 12 8.00004C9.87777 8.00004 7.98356 7.30637 6.62478 6.21921Z" fill="currentColor"></path></svg>

          </span>
        </button>
      </div>
    </div>
  );
}

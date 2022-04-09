// library
import Head from "next/head";
import React from "react";
import Image from "next/image";

// icons
import trobLogo from "../../public/image/torob_logo.svg";
import menuIcon from "../../public/image/menu_icon.svg";

function Header() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://jobs.torob.com/storage/employers/career-site/favicon/tbsoUm64kQFIdhwXQwdfDPucIvtCQF393shGUyM4.png"
          sizes="16x16"
        />
        <title>فرصت‌های شغلی ترب</title>
      </Head>
      <header className="flex items-center px-[10px] w-full h-[50.391px] bg-red-100 ">
        {/* icon */}
        <div className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 24 24"
            stroke="#c83635"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className=" hidden sm:block">
          <ul className="flex gap-4">
            <li>درباره ما</li>
            <li>شغل ها</li>
            <li>تصاویر</li>
          </ul>
        </div>
        {/* logo */}
        <div className="m-auto w-[30.63px] h-[30.38px] ">
          <Image src={trobLogo} alt="trobLogo" />
        </div>
        {/* buttons */}
        <button className="w-[102.45px] h-[35.06] bg-[#c83635] hidden sm:block">
          وب سایت
        </button>
      </header>
    </>
  );
}

export default Header;

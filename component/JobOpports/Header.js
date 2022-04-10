// library
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import trobLogo from "../../public/image/torob_logo.svg";

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
      <header className="flex items-center px-[14.400px] w-full h-[50.391px] bg-red-100 md:px-[56px] lg:px-[88px] ">
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
        <Link href="/">
          <a>
            <button className="w-[84.17px] h-[29.5px] rounded-5 border border-white border-solid bg-[#c83635] hidden sm:block md:w-[93.34px] md:h-[32.78px] lg:w-[102.45px] lg:h-[35.06px]">
              <div className="mx-[3.6px] text-[10.08px] text-white md:text-[11.02px] md:mx-[4px] lg:text-[12.32px] lg:mx-[4.4px] ">
                {" "}
                وبسایت شرکت
              </div>
            </button>
          </a>
        </Link>
      </header>
    </>
  );
}

export default Header;

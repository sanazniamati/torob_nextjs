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
      <header className="flex items-center px-[14.400px] w-full h-[50.391px] bg-wite md:px-[56px] lg:px-[88px] ">
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
          <ul className="flex h-full text-rose text-[12.96px] leading-[3.6rem] font-semibold gap-[20px] md:text-[14.4px] lg:text-[15.84px]">
            <li>
              <Link href="#">
                <a className="px-[7px] py-[3.6px]  hover:border-b-[2px] border-rose border-solid md:px-[8px] md:py-[4px] lg:px-[8.8px] lg:py-[4.4px] ">
                  درباره ما
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="px-[10px] py-[5px] hover:border-b-[2px] border-rose border-solid">
                  شغل ها
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="px-[10px] py-[5px] hover:border-b-[2px] border-rose border-solid">
                  تصاویر
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* logo */}
        <div className="m-auto w-[30.63px] h-[30.38px]">
          <Image
            src={trobLogo}
            alt="trobLogo"
            className="px-[21.6px] md:px-[24px] lg:px-[26.4px]"
          />
        </div>
        {/* buttons */}
        <Link href="/">
          <a>
            <button className="w-[84.17px] h-[29.5px] rounded-5 border border-white border-solid bg-rose hidden sm:block md:w-[93.34px] md:h-[32.78px] lg:w-[102.45px] lg:h-[35.06px]">
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

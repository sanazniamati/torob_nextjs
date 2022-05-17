// library
import Head from "next/head";
import { useState } from "react";

// styles
import headerStyles from "../../styles/Header.module.css";

// component
import LoginButton from "./LoginButton";
import Navbar from "./Navbar";
import Hamberger_Icons from "./Hamberger_Icons";

export default function Header() {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const handelOn_ShowDrowerStatus = () => {
    setDrawerStatus(true);
  };

  const handelOn_CloseDrawerStatus = () => {
    setDrawerStatus(false);
  };
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://jobs.torob.com/storage/employers/career-site/favicon/tbsoUm64kQFIdhwXQwdfDPucIvtCQF393shGUyM4.png"
          sizes="16x16"
        />
        <title>ترب | موتور جستجوی هوشمند محصولات</title>
      </Head>
      <header className="w-screen h-[48px] bg-[#f9fafb] px-[40px] flex justify-between relative ">
        <div className=" items-center flex sm:hidden">
          <button onClick={handelOn_ShowDrowerStatus}>
            <Hamberger_Icons />
          </button>
          {drawerStatus ? (
            <div className="right-0 fixed transition-all duration-500 top-0  h-screen w-[300px] z-50 bg-white">
              <button
                className="absolute top-6 left-6"
                onClick={handelOn_CloseDrawerStatus}
              >
                X
              </button>
              {/* <Navbar className="flex-col" /> */}
            </div>
          ) : null}
        </div>
        <div className="hidden sm:flex">
          <Navbar />
        </div>
        <LoginButton />
      </header>
    </>
  );
}

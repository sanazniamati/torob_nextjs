// library
import Image from "next/image";
import Link from "next/link";

// component
import Navbar from "../Header/Navbar";
import LoginButton from "../Header/LoginButton";

// icons
import searchIcon from "../../public/image/search.svg";
import torobLogo from "../../public/image/torob_logo.svg";

export default function MobileHeader() {
  return (
    <header className=" px-10 pt-5 h-[132px] w-screen bg-[#f9fafb] border-b border-solid border-[#ecedef]">
      <div className="flex h-12">
        {/* لگو ترب */}
        <div className="flex">
          <Link href="/">
            <a className="hidden  w-[48px] h-[48px]  sm:flex">
              <Image src={torobLogo} alt="Torob main logo icon " />
            </a>
          </Link>
          <div className="hidden text-rose text-[24px] font-bold mr-[12px] leading-[40px] sm:flex ">
            <Link href="/">
              <a className="hidden  w-[48px] h-[48px]  sm:flex">ترب</a>
            </Link>
          </div>
        </div>
        {/* سرچ باکس */}
        <div className="mx-[24px] grow">
          <form className="flex h-12 max-w-[480px] ">
            <input
              className="w-full px-[10px] border-y border-r border-solid border-[#62aef0] rounded-tr rounded-br"
              placeholder="نام کالا را وارد کنید"
            />
            <div className="w-[64px] flex justify-center items-center bg-rose pt-[2px] rounded-tl rounded-bl">
              <Image height={24} width={24} src={searchIcon} alt="searchIcon" />
            </div>
          </form>
        </div>
        {/* دکمه ورود/ثبت نام */}
        <div className="h-[48px] float-left leading-[48px] text-[14px] font-bold text-[#333333] cursor-pointer border border-solid border-[#ccc] bg-white rounded px-[4px] whitespace-nowrap">
          <button className="px-[12px]">ورود / ثبت نام</button>
          {/* <LoginButton width={300} height={300} /> */}
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
}

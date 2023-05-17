// library
import Link from "next/link";
import Image from "next/image";

// component
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

// styles
// import styles from "../styles/Index.module.css";

// icons
import trobLogo from "../public/image/torob_logo.svg";
import searchIcon from "../public/image/search.svg";

export default function Index() {
  return (
    <div className="w-screen min-h-full bg-[#f2f3f5] flex flex-col ">
      <Header />
      <main>
        <div className="flex flex-col relative items-center justify-center gap-[20px] min-h-calc-(100vh-(footer-header)) lg:min-h-calc-22">
          <div className="flex flex-col ">
            <div className="mt-[9px] ml-[12px] w-[85px] h-[85px]">
              <Link href="/">
                <a>
                  <Image
                    className="mb-[4px] "
                    src={trobLogo}
                    alt="trob
                  logo"
                  />
                </a>
              </Link>
            </div>
            <h1 className="hidden sm:block text-rose text-[40px] font-iranyekanwebbold  ">
              ترب
              {/* <div className="text-sm text-[#808080] font-normal leading-[25px]">
                موتور جستجوی هوشمند خرید
              </div> */}
            </h1>
          </div>
          <div className="max-w-[90%] h-[48px] flex rounded border border-solid border-[#cccccc]">
            <form className="w-[480px] relative ">
              <div className="w-[45px] h-[45px] cursor-pointer absolute p-[13px]">
                <Image src={searchIcon} alt="searchIcon" className="z-10" />
              </div>
              <input
                type="text"
                placeholder="نام کالا را وارد کنید"
                className=" w-full h-full outline-none pr-[48px] pl-[10px] rounded active:border-gray"
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

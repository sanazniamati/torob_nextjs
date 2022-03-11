// library
import Image from "next/image";
import Link from "next/link";
// component
import Navbar from "../Header/Navbar";
import LoginButton from "../Header/LoginButton";

// styles
import mobileHeaderStyles from "../../styles/MobilepageStyles/MobileHeader.module.css";
// icons
import searchIcon from "../../public/image/search.svg";

export default function MobileHeader() {
  return (
    <header className={mobileHeaderStyles.header_container}>
      <div className={mobileHeaderStyles.first_container}>
        <div className={mobileHeaderStyles.search_box_container}>
          <form className={mobileHeaderStyles.search_box}>
            <input
              id={mobileHeaderStyles.search_query_input}
              className={mobileHeaderStyles.search_input}
              placeholder="نام کالا را وارد کنید"
            />
            <div className={mobileHeaderStyles.searchicon_container}>
              <Image height={24} width={24} src={searchIcon} alt="searchIcon" />
            </div>
          </form>
        </div>
        <div className={mobileHeaderStyles.login_signUp}>
          <LoginButton />
        </div>
      </div>
      <div className={mobileHeaderStyles.secend_container}>
        <Navbar />
      </div>
    </header>
  );
}

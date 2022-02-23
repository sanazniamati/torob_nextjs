// library
import Link from "next/link";
import Image from "next/image";
// component
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
// styles
import styles from "../styles/Index.module.css";
// icons
import trobLogo from "../public/image/torob_logo.svg";
import searchIcon from "../public/image/search.svg";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.homepage}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <Image
                    src={trobLogo}
                    alt="trob
                  logo"
                  />
                </a>
              </Link>
            </div>
            <h1 className={styles.logoText}>
              ترب
              <div className={styles.slogan}>موتور جستجوی هوشمند خرید</div>
            </h1>
          </div>
          <div className={styles.search}>
            <form className={styles.searchFormHome}>
              <div className={styles.searchIconHome}>
                <Image
                  src={searchIcon}
                  alt="searchIcon"
                  className={styles.searchIcon}
                />
              </div>
              <input
                type="text"
                placeholder="نام کالا را وارد کنید"
                className={styles.searchTextHome}
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// library
import Head from "next/head";
// styles
import headerStyles from "../../styles/Header.module.css";
// component
import LoginButton from "./LoginButton";
import Navbar from "./Navbar";

export default function Header() {
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
      <header className={headerStyles.headerContainer}>
        <Navbar />
        <LoginButton />
      </header>
    </>
  );
}

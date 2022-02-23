// styles
import headerStyles from "../../styles/Header.module.css";
// component
import LoginButton from "./LoginButton";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={headerStyles.headerContainer}>
      <Navbar />
      <LoginButton />
    </header>
  );
}

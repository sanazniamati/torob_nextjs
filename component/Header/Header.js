import headerStyles from "../../styles/Header.module.css";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className={headerStyles.headerContainer}>
      <Navbar />
      <Button />
    </div>
  );
}

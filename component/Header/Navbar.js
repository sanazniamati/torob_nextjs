// libarary
import Link from "next/link";
import { useState } from "react";
// component
import SubMenu from "../SubMenu";
import PcSubMenu from "./subMenu/PcSubMenu";
import AnotherSubMenue from "./subMenu/AnotherSubMenue";
import HyperSubMenu from "./subMenu/HyperSubMenu";
import Accesorios from "./subMenu/Accesorios";
import RopaSubMenu from "./subMenu/RopaSubMenu";
import BeautiSubMenu from "./subMenu/BeautiSubMenu";
import AudioSubMenu from "./subMenu/AudioSubMenu";
// styles
import navbarStyles from "../../styles/Navbar.module.css";

export default function Navbar() {
  // موبایل
  const [isMobileActive, setIsMobileActive] = useState(false);
  const mobileClick = () =>
    setIsMobileActive((isMobileActive) => !isMobileActive);
  // لپ تاپ
  const [isPcActive, setIsPctActive] = useState(false);
  const pcClick = () => setIsPctActive((isPcActive) => !isPcActive);
  // سایر دسته ها
  const [isَAnotherActive, setIsَAnotherActive] = useState(false);
  const anotherClick = () =>
    setIsَAnotherActive((isَAnotherActive) => !isَAnotherActive);
  // هایپر مارکت
  const [isَHypermarcketActive, setIsَHypermarcketActive] = useState(false);
  const hyperMarcket = () =>
    setIsَHypermarcketActive((isَHypermarcketActive) => !isَHypermarcketActive);
  // لوازم خانگی
  const [isََAccesoriosActive, setIsَAccesoriosActive] = useState(false);
  const accesoriosClick = () =>
    setIsَAccesoriosActive((isََAccesoriosActive) => !isََAccesoriosActive);
  // مد و پوشاک
  const [isََRopaActive, setIsَRopaActive] = useState(false);
  const RopaClick = () => setIsَRopaActive((isََRopaActive) => !isََRopaActive);
  // زیبایی و بهداشت
  const [isBeautiActive, setIsBeautiActive] = useState(false);
  const BeautiClick = () =>
    setIsBeautiActive((isBeautiActive) => !isBeautiActive);
  // صوتی و تصویری
  const [isAudioActive, setIsAudioActive] = useState(false);
  const AudioClick = () => setIsBeautiActive((isAudioActive) => !isAudioActive);

  return (
    <>
      <nav>
        <div className={navbarStyles.menuCats}>
          <span>
            <Link href="/">
              <a
                className={navbarStyles.droptriggerIndex}
                onClick={mobileClick}
              >
                موبایل و تبلت{" "}
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isMobileActive && <SubMenu />}
            </div>
          </span>
          <span>
            <Link href="/">
              <a className={navbarStyles.droptriggerIndex} onClick={pcClick}>
                لپ تاپ ، کامپیوتر ، اداری
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isPcActive && <PcSubMenu />}
            </div>
          </span>
          <span className={navbarStyles.hyperSubMenu}>
            <Link href="/">
              <a
                className={navbarStyles.droptriggerIndex}
                onClick={hyperMarcket}
              >
                هایپر مارکت
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isَHypermarcketActive && <HyperSubMenu />}
            </div>
          </span>
          <span className={navbarStyles.accesorios}>
            <Link href="/">
              <a
                className={navbarStyles.droptriggerIndex}
                onClick={accesoriosClick}
              >
                لوازم خانگی
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isَHypermarcketActive && <HyperSubMenu />}
            </div>
          </span>
          <span className={navbarStyles.ropa}>
            <Link href="/">
              <a className={navbarStyles.droptriggerIndex} onClick={RopaClick}>
                مد و پوشاک
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isََRopaActive && <RopaSubMenu />}
            </div>
          </span>
          <span className={navbarStyles.beauti}>
            <Link href="/">
              <a
                className={navbarStyles.droptriggerIndex}
                onClick={BeautiClick}
              >
                زیبایی و بهداشت
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isBeautiActive && <BeautiSubMenu />}
            </div>
          </span>
          <span className={navbarStyles.audio}>
            <Link href="/">
              <a className={navbarStyles.droptriggerIndex} onClick={AudioClick}>
                صوتی و تصویری
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isAudioActive && <AudioSubMenu />}
            </div>
          </span>
          <span>
            <Link href="/">
              <a
                className={navbarStyles.droptriggerIndex}
                onClick={anotherClick}
              >
                سایر دسته ها
              </a>
            </Link>
            <div className={navbarStyles.dropdown}>
              {isََAccesoriosActive && <Accesorios />}
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

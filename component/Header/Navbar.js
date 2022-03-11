// library
import { useState } from "react";
// component
import PcSubMenu from "./subMenu/PcSubMenu";
import Accesorios from "./subMenu/Accesorios";
import RopaSubMenu from "./subMenu/RopaSubMenu";
import AudioSubMenu from "./subMenu/AudioSubMenu";
import HyperSubMenu from "./subMenu/HyperSubMenu";
import BeautiSubMenu from "./subMenu/BeautiSubMenu";
import MobileSubMenu from "./subMenu/MobileSubMenu";
import AnotherSubMenue from "./subMenu/AnotherSubMenue";
// styles
import navbarStyles from "../../styles/Navbar.module.css";

export default function Navbar() {
  const [selectedNavButtons, setSelectedNavButtons] = useState(false);

  return (
    <nav className={navbarStyles.menu_container}>
      {navButtons.map((items) => (
        <div className={items.className} key={items.id}>
          <div
            className={navbarStyles.droptriggerIndex}
            onClick={() => setSelectedNavButtons(items)}
          >
            {items.title}
          </div>

          <div className={navbarStyles.dropdown}>
            {selectedNavButtons.id == items.id && items.submenu}
          </div>
        </div>
      ))}
    </nav>
  );
}
const navButtons = [
  {
    id: 0,
    title: "موبایل و تبلت",
    submenu: <MobileSubMenu />,
    className: navbarStyles.mobile,
  },
  {
    id: 1,
    title: "لپ تاپ ، کامپیوتر ، اداری",
    submenu: <PcSubMenu />,
    className: navbarStyles.pc,
  },
  {
    id: 2,
    title: "هایپر مارکت",
    submenu: <HyperSubMenu />,
    className: navbarStyles.hyperSubMenu,
  },
  {
    id: 3,
    title: "لوازم خانگی",
    submenu: <Accesorios />,
    className: navbarStyles.accesorios,
  },
  {
    id: 4,
    title: "مد و پوشاک",
    submenu: <RopaSubMenu />,
    className: navbarStyles.ropa,
  },
  {
    id: 5,
    title: "زیبایی و بهداشت",
    submenu: <BeautiSubMenu />,
    className: navbarStyles.beauti,
  },
  {
    id: 6,
    title: "صوتی و تصویری",
    submenu: <AudioSubMenu />,
    className: navbarStyles.audio,
  },
  {
    id: 7,
    title: "سایر دسته ها",
    submenu: <AnotherSubMenue />,
    className: navbarStyles.another,
  },
];

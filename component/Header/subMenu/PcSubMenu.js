import SubMenuStyles from "../../../styles/subMenu.module.css";
import Link from "next/link";
import mobileData from "../../../mobileData.json";
export default function PcSubMenu() {
  return (
    <>
      <Link href="/">
        <a className={SubMenuStyles.linkOnClick}>
          <div className={SubMenuStyles.droptitle}>
            لپ تاپ ، کامپیوتر ، اداری
          </div>
        </a>
      </Link>
      <ul className={SubMenuStyles.dropitems}>
        {/* لپ تاپ و نوت بوک  */}
        <div className={SubMenuStyles.columnelement}>
          <Link href="/mobile">
            <a className={SubMenuStyles.subtitle}>لپ تاپ و نوت بوک </a>
          </Link>
          <ul className={SubMenuStyles.subsubitems}>
            {mobileData.map((items) => (
              <div key={items.id}>
                <Link href="/mobile">
                  <a className={SubMenuStyles.grayhover}>
                    <span>{items.mobilename}</span>
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        {/* کامپیوتر و مانیتور */}
        <div className={SubMenuStyles.columnelement}>
          <Link href="/">
            <a className={SubMenuStyles.subtitle}>کامپیوتر و مانیتور</a>
          </Link>
          <ul className={SubMenuStyles.subsubitems}>
            {mobileData.map((items) => (
              <div key={items.id}>
                <Link href="/">
                  <a className={SubMenuStyles.grayhover}>
                    {" "}
                    <span>{items.pcName}</span>
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </ul>
    </>
  );
}

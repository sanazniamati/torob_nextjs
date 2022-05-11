// library
import Link from "next/link";
// styles
import MobilesSubMenuStyles from "../../../styles/MobileSubMenu.module.css";
// data Jason
import mobileData from "../../../mobileData.json";

export default function MobileSubMenu() {
  return (
    <>
      <Link href="#">
        <a className={MobilesSubMenuStyles.linkOnClick}>
          <div className={MobilesSubMenuStyles.droptitle}>موبایل و تبلت</div>
        </a>
      </Link>
      <ul className={MobilesSubMenuStyles.dropitems}>
        {mobileData.map((items) => (
          <div key={items.id} className={MobilesSubMenuStyles.columnelement}>
            <Link href={items.link}>
              <a className={MobilesSubMenuStyles.subtitle}>{items.title}</a>
            </Link>
            <ul className={MobilesSubMenuStyles.subsubitems}>
              {items.subsubMenuItems.map((subMenuValu) => (
                <div key={subMenuValu.id}>
                  <Link href="#">
                    <a className={MobilesSubMenuStyles.grayhover}>
                      <div>{subMenuValu.title}</div>
                    </a>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
}

// library
import Link from "next/link";
// styles
import SubMenuStyles from "../../../styles/SubMenu.module.css";
// data Jason
import HyperData from "../../../DataJson/HyperMarket.json";

export default function HyperSubMenu() {
  return (
    <>
      <Link href="/">
        <a className={SubMenuStyles.linkOnClick}>
          <div className={SubMenuStyles.droptitle}>هایپر مارکت </div>
        </a>
      </Link>
      <ul className={SubMenuStyles.dropitems}>
        {HyperData.map((pcitems) => (
          <div key={pcitems.id} className={SubMenuStyles.columnelement}>
            <Link href="/mobile">
              <a className={SubMenuStyles.subtitle}>{pcitems.title}</a>
            </Link>
            <ul className={SubMenuStyles.subsubitems}>
              {pcitems.subsubMenuItems.map((subMenuValu) => (
                <div key={subMenuValu.id}>
                  <Link href="/mobile">
                    <a className={SubMenuStyles.grayhover}>
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

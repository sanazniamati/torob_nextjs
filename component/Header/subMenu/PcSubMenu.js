// library
import Link from "next/link";
// styles
import SubMenuStyels from "../../../styles/SubMenu.module.css";
// data Jason
import PcData from "../../../DataJson/PcData.json";

export default function PcSubMenu() {
  return (
    <>
      <Link href="/">
        <a className={SubMenuStyels.linkOnClick}>
          <div className={SubMenuStyels.droptitle}>
            لپ تاپ ، کامپیوتر ، اداری
          </div>
        </a>
      </Link>
      <ul className={SubMenuStyels.dropitems}>
        {PcData.map((pcitems) => (
          <div key={pcitems.id} className={SubMenuStyels.columnelement}>
            <Link href="/mobile">
              <a className={SubMenuStyels.subtitle}>{pcitems.title}</a>
            </Link>
            <ul className={SubMenuStyels.subsubitems}>
              {pcitems.subsubMenuItems.map((subMenuValu) => (
                <div key={subMenuValu.id}>
                  <Link href="/mobile">
                    <a className={SubMenuStyels.grayhover}>
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

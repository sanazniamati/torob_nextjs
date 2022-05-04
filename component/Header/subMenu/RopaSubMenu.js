// library
import Link from "next/link";
// styles
import SubMenuStyles from "../../../styles/SubMenu.module.css";
// data Jason
import RopaData from "../../../DataJson/Ropa.json";

export default function RopaSubMenu() {
  return (
    <>
      <Link href="/">
        <a className={SubMenuStyles.linkOnClick}>
          <div className={SubMenuStyles.droptitle}> مد و پوشاک </div>
        </a>
      </Link>
      <ul className={SubMenuStyles.dropitems}>
        {RopaData.map((items) => (
          <div key={items.id} className={SubMenuStyles.columnelement}>
            <Link href="/mobile">
              <a className={SubMenuStyles.subtitle}>{items.title}</a>
            </Link>
            <ul className={SubMenuStyles.subsubitems}>
              {items.subsubMenuItems.map((subMenuValu) => (
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

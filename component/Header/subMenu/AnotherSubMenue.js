// library
import Link from "next/link";
// styles
import SubMenuStyles from "../../../styles/SubMenu.module.css";
// data Jason
import AnotherData from "../../../DataJson/AnotherData.json";

export default function AnotherSubMenue() {
  return (
    <>
      <Link href="/">
        <a className={SubMenuStyles.linkOnClick}>
          <div className={SubMenuStyles.droptitle}> سایر دسته ها </div>
        </a>
      </Link>
      <ul className={SubMenuStyles.dropitems}>
        {AnotherData.map((items) => (
          <div key={items.id} className={SubMenuStyles.columnelement}>
            <Link href="/">
              <a className={SubMenuStyles.subtitle}>{items.title}</a>
            </Link>
            <ul className={SubMenuStyles.subsubitems}>
              {items.subsubMenuItems.map((subMenuValu) => (
                <div key={subMenuValu.id}>
                  <Link href="/">
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

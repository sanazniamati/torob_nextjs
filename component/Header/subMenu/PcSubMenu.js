// library
import Link from "next/link";
// styles
import pcSubMenuStyles from "../../../styles/PcSubMenu.module.css";
// data Jason
import PcData from "../../../PcData.json";

export default function PcSubMenu() {
  return (
    <>
      <Link href="/https://torob.com/browse/173/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C/">
        <a className={pcSubMenuStyles.linkOnClick}>
          <div className={pcSubMenuStyles.droptitle}>لپ تاپ </div>
        </a>
      </Link>
      <ul className={pcSubMenuStyles.dropitems}>
        {PcData.map((pcitems) => (
          <div key={pcitems.id} className={pcSubMenuStyles.columnelement}>
            <Link href="/mobile">
              <a className={pcSubMenuStyles.subtitle}>{pcitems.title}</a>
            </Link>
            <ul className={pcSubMenuStyles.subsubitems}>
              {pcitems.subsubMenuItems.map((subMenuValu) => (
                <div key={subMenuValu.id}>
                  <Link href="/mobile">
                    <a className={pcSubMenuStyles.grayhover}>
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

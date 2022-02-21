import SubMenuStyles from "../styles/SubMenu.module.css";
import Link from "next/link";
import mobileData from "../mobileData.json";
export default function SubMenu() {
  return (
    <>
      <Link href="/mobile">
        <a className={SubMenuStyles.linkOnClick}>
          <div className={SubMenuStyles.droptitle}>موبایل و تبلت</div>
        </a>
      </Link>
      <ul className={SubMenuStyles.dropitems}>
        {/* گوشی موبایل */}

        <div className={SubMenuStyles.columnelement}>
          <Link href="/mobile">
            <a className={SubMenuStyles.subtitle}>گوشی موبایل</a>
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
        {/* تبلت */}
        <div className={SubMenuStyles.columnelement}>
          <Link href="/mobile">
            <a className={SubMenuStyles.subtitle}>تبلت</a>
          </Link>
          <ul className={SubMenuStyles.subsubitems}>
            {mobileData.map((items) => (
              <div key={items.id}>
                <Link href="/mobile">
                  <a className={SubMenuStyles.grayhover}>
                    {" "}
                    <span>{items.nameF}</span>
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

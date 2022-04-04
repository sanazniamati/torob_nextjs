// library
import Link from "next/link";
import footerStyles from "../../styles/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.navGroup}>
          {footer_link.slice(0, 5).map((items) => (
            <div key={items.id} className={items.className}>
              <Link href={items.href_link}>
                <a className={footerStyles.footerLink}>{items.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className={footerStyles.navGroup}>
          {footer_link.slice(5, 9).map((items) => (
            <div key={items.id} className={items.className}>
              <Link href={items.href_link}>
                <a className={footerStyles.footerLink}>{items.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
const footer_link = [
  {
    id: 0,
    title: "راهنمای خرید امن",
    href_link: "/pages/safe-shopping-guide/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 1,
    title: "پیگیری سفارش",
    href_link: "/feedback/complaints/1/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 2,
    title: "تماس با ما",
    href_link: "/pages/contact-us/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 3,
    title: "درباره ترب",
    href_link: "/pages/about-us/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 4,
    title: "تخفیف ها",
    href_link: "/special-offers/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 5,
    title: "لیست فروشگاه‌ها ",
    href_link: "/shop-list/",
    className: footerStyles.footerFloatLeft,
  },
  {
    id: 6,
    title: "ثبت‌نام‌ فروشگاه‌ها",
    href_link: "https://panel.torob.com/",
    className: footerStyles.footerFloatLeft,
  },
  {
    id: 7,
    title: "پنل فروشگاه‌ها",
    href_link: "https://panel.torob.com/",
    className: footerStyles.footerFloatLeft,
  },
  {
    id: 8,
    title: " فرصت‌های شغلی",
    href_link: "/pages/careers/",
    className: footerStyles.footerFloatLeft,
  },
];

{
  /* <div className={footerStyles.footerFloatRight}>
          <Link href="/pages/safe-shopping-guide/">
            <a className={footerStyles.footerLink}> راهنمای خرید امن</a>
          </Link>
          
          <Link href="/feedback/complaints/1/">
            <a className={footerStyles.footerLink}> پیگیری سفارش </a>
          </Link>
          <Link href="/pages/contact-us/">
            <a className={footerStyles.footerLink}>تماس با ما </a>
          </Link>
          <Link href="/pages/about-us/">
            <a className={footerStyles.footerLink}> درباره ترب </a>
          </Link>
          <Link href="/special-offers/">
            <a className={footerStyles.footerLink}>تخفیف ها </a>
          </Link>
        </div> */
}
{
  /* <div className={footerStyles.footerFloatLeft}>
          <Link href="/shop-list/" className={footerStyles.footerLink}>
            <a className={footerStyles.footerLink}>لیست فروشگاه‌ها</a>
          </Link>
          <Link href="https://panel.torob.com/" target="_blank">
            <a className={footerStyles.footerLink}>ثبت‌ نام‌ فروشگاه‌ها</a>
          </Link>
          <Link href="https://panel.torob.com/" target="_blank">
            <a className={footerStyles.footerLink}>پنل فروشگاه‌ها</a>
          </Link>
          <Link href="/pages/careers/">
            <a className={footerStyles.footerLink}>فرصت‌های شغلی</a>
          </Link>
        </div> */
}

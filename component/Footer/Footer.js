// library
import Link from "next/link";

// styles
import footerStyles from "../../styles/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className=" h-[76px] bg-[#f9fafb] hidden sm:block lg:h-[40px]">
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <div className={footerStyles.navGroup}>
          {footer_link.slice(0, 5).map((items) => (
            <div key={items.id} className={items.className}>
              <Link href={items.href_link}>
                <a className={footerStyles.footerLink} target="_blank">
                  {items.title}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className={footerStyles.navGroup}>
          {footer_link.slice(5, 9).map((items) => (
            <div key={items.id} className={items.className}>
              <Link href={items.href_link}>
                <a className={footerStyles.footerLink} target="_blank">
                  {items.title}
                </a>
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
    href_link: "https://torob.com/pages/safe-shopping-guide/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 1,
    title: "پیگیری سفارش",
    href_link: "https://torob.com/feedback/complaints/1/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 2,
    title: "تماس با ما",
    href_link: "https://torob.com/pages/contact-us/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 3,
    title: "درباره ترب",
    href_link: "https://torob.com/pages/about-us/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 4,
    title: "تخفیف ها",
    href_link: "https://torob.com/special-offers/",
    className: footerStyles.footerFloatRight,
  },
  {
    id: 5,
    title: "لیست فروشگاه‌ها ",
    href_link: "https://torob.com/shop-list/",
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
    href_link: "/jobOpport",
    className: footerStyles.footerFloatLeft,
  },
];
{
}

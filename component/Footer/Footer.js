import Link from "next/link";
import footerStyles from "../../styles/Footer/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>
          <div className={footerStyles.footerFloatRight}>
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
          </div>
          <div className={footerStyles.footerFloatLeft}>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="mt-[36px] w-full h-[50.391px] flex items-center justify-around shadow-footer">
        <Link href="https://karboom.io">
          <a className="text-[10.08px] text-gray md:text-[11.2px] lg:text-[12.32px]">
            استخدام با karboom.io
          </a>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;

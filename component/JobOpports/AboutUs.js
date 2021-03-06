// library
import React from "react";
import Image from "next/image";

// image & icons
import torobEmployers from "../../public/image/torob_employers.jpg";

function AboutUs() {
  return (
    <>
      <div className="w-full">
        <div className=" w-full flex justify-center h-[252px] md:h-[280px] lg:h-[308px]">
          <Image
            className="   "
            src={torobEmployers}
            // width="483px"
            // height="252px"
            // layout="responsive"
            alt="torobEmployers"
          />
        </div>
        <div className="w-full text-center mb-[50.400px] px-[14.4px] md:px-[56px] lg:px-[88px] ">
          <h2 className="text-[20.16px] text-center pt-[21.6px] ">درباره ما</h2>
          <p className="pt-[21.6px] text-[11.52px] text-[#898989]">
            معرفی و تاریخچه
          </p>
          <p className="text-[10.08px] text-[#898989] text-justify ">
            موتور جستجوی خرید ترب از سال ۱۳۹۳ شمسی با هدف ارائه و مقایسه شفاف
            قیمت‌ها توسط تعدادی از دانشجویان دانشگاه شریف راه‌اندازی شد. سال
            ۱۳۹۵ شرکت فن‌گستران پیشرو بازار (مسئولیت محدود) برای اداره‌ی کارهای
            این سرویس ثبت شد و در حال حاضر همه‌ی حقوق این سرویس متعلق به شرکت
            «فن‌گستران پیشرو بازار» است. مهم‌ترین فعالیت این شرکت توسعه‌ی موتور
            جستجوی خرید ترب است. این موتور جستجوی بالغ بر میلیون‌ها محصول از بیش
            از ۱۰ هزار فروشگاه معتبر اینترنتی ایرانی را جمع‌اوری کرده است تا به
            کاربران کمک کند در کمترین زمان بهترین قیمت را بین فروشگاه‌های مختلف
            پیدا کنند. همچنین به فروشگاه‌های اینترنتی معتبر کمک می‌کند تا بدون
            نیاز به دانش فنی بتوانند به گستره‌ی بزرگی از کاربران اینترنتی دسترسی
            پیدا کنند.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

// library
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";

function Smilar_category() {
  const [div2IsActive, setDiv2IsActive] = useState(true);
  const showdiv2 = () =>
    setDiv2IsActive((div2IsActive) => !div2IsActive)(
      (div2IsActive) => !div2IsActive
    );

  return (
    <div className="filter_row w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6]">
      <div
        className="filter_title_container cursor-pointer flex flex-row-reverse justify-end"
        onClick={showdiv2}
      >
        <div className="filter_title mr-[8px]">دسته های مشابه</div>
        <div className="icon_container ">
          <div className="svg_style">
            <Image
              className="w-[24px] h-[24px] transform rotate-180 "
              src={dropdownIcon}
              alt="dropdownIcon"
            />
          </div>
        </div>
      </div>
      {div2IsActive ? (
        <div className="h-[345px]">
          <Link href="/">
            <a className="parents h-[48px] flex">
              <div className="chev mx-[5px] mt-[10px] mb-[5px]">
                <div className="svg_style">
                  <Image
                    className="w-[20px] h-[20px] transform rotate-90 "
                    src={dropdownIcon}
                    alt="dropdownIcon"
                  />
                </div>
              </div>
              <div className="leaf text-[14px] font-normal cursor-pointer leading-[42px]  ">
                موبایل و تبلت
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="parents last ml-[25px] flex">
              <div className=" chev mx-[5px] mt-[10px] mb-[5px] ">
                <div className="svg_style">
                  <Image
                    className="w-[20px] h-[20px] transform  "
                    src={dropdownIcon}
                    alt="dropdownIcon"
                  />
                </div>
              </div>

              <div className="leaf text-[14px] font-normal cursor-pointer leading-[42px]    ">
                {Similar_categories.map((item) => (
                  <div key={item.id}>{item.categories}</div>
                ))}
              </div>
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
const Similar_categories = [
  { id: 0, categories: "گوشی موبایل" },
  { id: 1, categories: "تبلت" },
  { id: 2, categories: "هدفون،هدست و هندزفری" },
  { id: 3, categories: "لوازم جانبی موبایل و تبلت" },
  { id: 4, categories: "قطعات موبایل و تبلت" },
  { id: 5, categories: "  لوازم الکتریکی همراه " },
  { id: 6, categories: "  ساعت و مچ بند هوشمند   " },
];

export default Smilar_category;

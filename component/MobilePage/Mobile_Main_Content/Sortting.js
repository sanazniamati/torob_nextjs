// library
import Image from "next/image";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";

function Sortting() {
  const [dropdown, setDropdown] = useState(false);
  const modaBox = () => setDropdown((dropdown) => !dropdown);
  return (
    <div className="grow shrink ">
      <div className="border-y-[1px] border-solid border-[#e6e6e6] flex mx-[48px] content-center">
        <div className="grow shrink  ">
          <div className="flex flex-row justify-between ">
            <ol className=" flex list-none  py-[14px] text-[#808080]">
              <li className=" text-xs inline-block relative">همه دسته‌ها</li>
              <li className=" before:content-['/'] before:px-[8px] text-xs inline-block relative">
                موبایل و تبلت
              </li>
              <li className="before:content-['/'] before:px-[8px] text-xs inline-block relative">
                گوشی موبایل
              </li>
            </ol>
          </div>
        </div>
        <div className="relative  float-left h-[48px] ">
          <div className="flex-col">
            <div className=" flex my-[12px] text-[14px] text-black leading-6 ">
              <div className=" ml-[12px] cursor-pointer" onClick={modaBox}>
                محبوب‌ترین
              </div>
              <Image
                className="w-[24px] h-[24px] transform rotate-360 "
                src={dropdownIcon}
                alt="dropdownIcon"
              />
            </div>
            {dropdown ? (
              <div className=" mt-[5px] z-20 ">
                <ul className="rounded border border-solid border-[#F2F3F5] bg-white p-4 leading-[24px] cursor-pointer text-[14px] text-center">
                  <li className="">محبوب‌ترین</li>
                  <li className="">جدیدترین</li>
                  <li className="">ارزان‌ترین</li>
                  <li className="">گران‌ترین </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sortting;

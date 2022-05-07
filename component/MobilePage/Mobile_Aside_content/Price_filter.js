// library
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";

function Price_filter() {
  const [firstDivIsActive, setfirstDivIsActive] = useState(true);
  const show = () =>
    setfirstDivIsActive((firstDivIsActive) => !firstDivIsActive);
  return (
    <div className="filter_row  w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6]">
      <div
        className="filter_title_container h-[38px] cursor-pointer flex flex-row-reverse justify-end"
        onClick={show}
      >
        <div className="filter_title mr-[8px]">قیمت (تومان)</div>
        <div className="icon_container">
          <div className="svg_style">
            <Image
              className="w-[24px] h-[24px] transform rotate-180 "
              src={dropdownIcon}
              alt="dropdownIcon"
            />
          </div>
        </div>
      </div>
      <div className="price_container w-[311px] ">
        <div className="price_inputs flex  grid-cols-1 gap-[24px] ">
          <div className="input_wrapper w-[143.5px]  bg-red-400 h-[40px] px-[12px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded relative items-center ">
            <span className="inline text-[12px] text-[#808080] ml-[8px] leading-[40px] order-1">
              از
            </span>
            <input
              id="inputMin"
              // value="۰"
              // autocomplete="off"
              className="input_box w-[94.81px] leading-[40px] h-[40px] outline-none pt-[1px] pl-[2px] pb-[1px] pr-[8px] font-normal bg-green-200  "
            ></input>
          </div>
          <div className="input_wrapper w-[143.5px] bg-red-400 h-[40px] px-[12px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded relative items-center ">
            <span className="inline text-[12px] text-[#808080] ml-[8px] leading-[40px] order-1">
              تا
            </span>
            <input
              id="inputMax"
              // value="۳۴۸٫۰۰۰٫۰۰۰"
              // autocomplete="off"
              className="input_box w-[94.81px]  bg-green-200 leading-[40px] h-[40px] outline-none pt-[1px] pl-[2px] pb-[1px] pr-[8px] font-normal"
            ></input>
          </div>
        </div>
        <div className="button_apply_container mt-[24px]">
          <button className="button_apply relative border text-center text-[#333333] cursor-pointer w-full h-[40px] leading-[35px] pt-[2px] pr-[16px] pb-[3px] pl-[16px] border-none mb-[24px] font-[600px] bg-[#ecedef]">
            اعمال فیلتر قیمت
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price_filter;

// library
import Image from "next/image";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";

function Price_filter() {
  const [Price_filter_Active, setPrice_filter_Active] = useState(true);
  const show_Price_filter = () =>
    setPrice_filter_Active((Price_filter_Active) => !Price_filter_Active);

  return (
    <div className="w-full px-[12px]  text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6]">
      <div
        className="mb-4 cursor-pointer flex flex-row-reverse justify-end"
        onClick={show_Price_filter}
      >
        <div className="mr-[8px]">قیمت (تومان)</div>
        {Price_filter_Active ? (
          <Image
            className="w-[24px] h-[24px] transform rotate-180 "
            src={dropdownIcon}
            alt="dropdownIcon"
          />
        ) : (
          <Image
            className="w-[24px] h-[24px] transform rotate-360 "
            src={dropdownIcon}
            alt="dropdownIcon"
          />
        )}
      </div>

      {Price_filter_Active ? (
        <div className="w-[311px] ">
          <div className="flex  grid-cols-1 gap-[24px] ">
            <div className="relative h-[40px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded items-center ">
              <span className="inline w-[60px] text-[12px] text-[#808080] mr-[8px] leading-[40px] order-1">
                از
              </span>
              <input
                id="inputMin"
                value="۰"
                // autocomplete="off"
                className="w-full leading-[40px] h-full outline-none pr-[8px] font-normal text-[14px]    "
              />
            </div>
            <div className="relative h-[40px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded items-center ">
              <span className="inline w-[60px] text-[12px] text-[#808080] mr-[8px] leading-[40px] order-1">
                تا
              </span>
              <input
                id="inputMax"
                value="۶۲٫۲۱۰٫۲۰۰"
                // autocomplete="off"
                className=" w-full leading-[40px] h-full outline-none pr-[8px] font-normal text-[14px"
              />
            </div>
          </div>
          <div className="mt-[24px]">
            <button className="relative border text-center text-[#333333] cursor-pointer w-full h-[40px] leading-[35px] pt-[2px] pr-[16px] pb-[3px] pl-[16px] border-none mb-[24px] font-[600px] bg-[#ecedef]">
              اعمال فیلتر قیمت
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Price_filter;

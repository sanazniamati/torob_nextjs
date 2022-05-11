// library
import Image from "next/image";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";

function Inventory() {
  const [Inventory_Box_Active, setInventory_Box_Active] = useState(true);
  const show_Inventory_Box = () =>
    setInventory_Box_Active((Inventory_Box_Active) => !Inventory_Box_Active);

  return (
    <div className="filter_row w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6] ">
      <div
        className="filter_title_container h-auto cursor-pointer flex flex-row-reverse justify-end "
        onClick={show_Inventory_Box}
      >
        <div className="filter_title mr-[8px] "> موجودی</div>
        {Inventory_Box_Active ? (
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
      {Inventory_Box_Active ? (
        <div className="availabilty_filter flex pt-4 pb-8">
          <div className="checkbox border border-solid border-[#8897a8] rounded w-[24px] h-[24px]">
            <div className="svg_style ">
              <svg
                fill="white"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
              </svg>
            </div>
          </div>
          <p className="mx-[8px] leading-[24px] font-normal">
            نمایش محصولات موجود
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Inventory;

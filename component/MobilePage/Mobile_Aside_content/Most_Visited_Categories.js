// library
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Most_Visited_Categories() {
  const [firstDivIsActive, setfirstDivIsActive] = useState(true);
  const show = () =>
    setfirstDivIsActive((firstDivIsActive) => !firstDivIsActive);
  return (
    <div className="filter_row w-full border-b-none px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6] ">
      <div
        className="filter_title_container cursor-pointer flex flex-row-reverse justify-end "
        onClick={show}
      >
        <div className="filter_title h-[40px] mt-[14px]">
          دسته بندی های پر بازدید
        </div>
      </div>
      <div className="text-right py-[4px] px-[12px] text-[#808080] text-[14px] font-medium">
        <div className="most_visited_link">
          <Link href="/">
            <a>قیمت گوشی شیائومی</a>
          </Link>
        </div>
        <div className="most_visited_link">
          <Link href="/">
            <a>قیمت گوشی سانسونگ</a>
          </Link>
        </div>
        <div className="most_visited_link">
          <Link href="/">
            <a>قیمت گوشی اپل</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Most_Visited_Categories;

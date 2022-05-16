// library
import Image from "next/image";
import { useState } from "react";

// icons
import filter from "../../../public/image/filter.svg";

// component
import MobileAside from "../Mobile_Aside_content/MobileAsideContent";

function Title_filters() {
  const [filterBox, setFilterBox] = useState(false);
  const showFilterBox = () => {
    setFilterBox((filterBox) => !filterBox);
  };
  return (
    <div className="w-full mr-[40px]   ">
      <h1 className="leading-[40px] text-2xl font-bold mt-6 mb-3 flex overflow-auto ">
        قیمت انواع گوشی موبایل
      </h1>
      <div className="flex 1025-screen:hidden" onClick={showFilterBox}>
        <Image
          className="cursor-pointer ml-2"
          src={filter}
          height={56}
          width={20}
          alt="filter"
        />
        <div className="leading-[56px] mx-2 text-[14px]">فیلترها</div>
      </div>

      {/* {filterBox ? <MobileAside /> : null} */}
    </div>
  );
}

export default Title_filters;

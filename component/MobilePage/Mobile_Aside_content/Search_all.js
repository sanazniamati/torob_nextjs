// library
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";
import seachIcon from "../../../public/image/search.svg";

function Search_all() {
  const [search_Box_Active, setSearch_Box_Active] = useState(true);
  const show = () =>
    setSearch_Box_Active((search_Box_Active) => !search_Box_Active);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="filter_row w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6] ">
      <div
        className="filter_title_container h-auto cursor-pointer flex flex-row-reverse justify-end "
        onClick={show}
      >
        <div className="filter_title mr-[8px]"> جستجو در نتایج</div>
        {search_Box_Active ? (
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
      {search_Box_Active ? (
        <div className="mb-[24px]">
          <form className="search_form">
            <div className="input_wrapper h-[48px] px-[12px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded relative items-center  search_form_container w-full mt-[14px] pt-[5px]">
              <input
                className="outline-none w-full order-1"
                id="search-query"
                placeholder="  "
                value=""
                // autocomplete="off"
              />
              <div className=" w-[20px] h-[20px] ">
                <Image
                  className="items-center"
                  src={seachIcon}
                  alt="seachIcon"
                />
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Search_all;

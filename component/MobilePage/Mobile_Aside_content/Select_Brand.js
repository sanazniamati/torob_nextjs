// library
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// icons
import dropdownIcon from "../../../public/image/dropdown_icon.svg";
import seachIcon from "../../../public/image/search.svg";

// data
import mobileBrand from "../../../DataJson/MobileBrand.json";

export default function Select_Brand() {
  const [Select_Brand_Active, setSelect_Brand_Active] = useState(true);
  const show = () =>
    setSelect_Brand_Active((Select_Brand_Active) => !Select_Brand_Active);

  const [Smilar_Brand, setSmilar_Brand] = useState(false);
  const Show_Smilar_Brand = () =>
    setSmilar_Brand((Smilar_Brand) => !Smilar_Brand);

  const [searchTerm, setSearchTerm] = useState("");
  const searchText = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <section>
      <div className="filter_row w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6] ">
        <div
          className="filter_title_container cursor-pointer flex flex-row-reverse justify-end "
          onClick={show}
        >
          <div className="filter_title mr-[8px] ">انتخاب برند</div>
          {Select_Brand_Active ? (
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
        {Select_Brand_Active ? (
          <>
            <div className="filter_searchbox_container mt-[18px]">
              <form>
                <div className="input_wrapper h-[40px] px-[12px] flex flex-row-reverse border border-solid border-[#c4cdd5] rounded relative items-center  ">
                  <input
                    className="w-full h-full pr-[8px] outline-none text-[14px] "
                    id="search-query"
                    placeholder="جستجوی برند"
                    // autocomplete="off"
                    value={searchTerm}
                    onChange={searchText}
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
            <div className="filter_brand_container mt-[4px]">
              {mobileBrand
                .slice(0, 8)
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.nameE
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.nameF.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <Link href="/" key={item.id}>
                    <a className="filter_brand mt-[4px] flex justify-between items-center px-[8px] py-[4px] cursor-pointer text-[14px] font-normal">
                      <div className="filter_brand_item ">{item.nameF}</div>
                      <div className="filter_brand_item">{item.nameE}</div>
                    </a>
                  </Link>
                ))}

              <div>
                {Smilar_Brand ? (
                  <>
                    {mobileBrand
                      .slice(8, 50)
                      .filter((val) => {
                        if (searchTerm === "") {
                          return val;
                        } else if (
                          val.nameE
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.nameF
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((item) => (
                        <Link href="/" key={item.id}>
                          <a className="filter_brand mt-[4px] flex justify-between items-center px-[8px] py-[4px] cursor-pointer text-[14px] font-normal">
                            <div className="filter_brand_item ">
                              {item.nameF}
                            </div>
                            <div className="filter_brand_item">
                              {item.nameE}
                            </div>
                          </a>
                        </Link>
                      ))}
                  </>
                ) : null}
                <div
                  className="flex cursor-pointer"
                  onClick={Show_Smilar_Brand}
                >
                  <div className="p-[12px] flex text-[16px] font-bold">
                    نمایش سایر برندها
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="w-[24px] h-[24px]  "
                      src={dropdownIcon}
                      alt="dropdownIcon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

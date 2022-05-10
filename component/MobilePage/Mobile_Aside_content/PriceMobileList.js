import Link from "next/link";

function PriceMobileList() {
  return (
    <div className="filter_row w-full px-[12px] pb-4 text-[16px] font-bold relative mt-4 flex flex-col border-b  border-solid border-[#E6E6E6] ">
      <div className="filter_title_container cursor-pointer flex flex-row-reverse justify-end ">
        <Link href="/">
          <a className="price_list_link text-rose font-bold text-[14px] text-right mt-[12px] mb-[8px]">
            لیست قیمت گوشی موبایل
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PriceMobileList;

// json file
import data from "../../DataJson/data.json";

// component
import SellItem from "./SellItem";

export default function MainContent() {
  return (
    <>
      <div className="grow shrink basis-0 ">
        <div className="border-y-[1px] border-solid border-[#e6e6e6] flex mx-[48px] content-center">
          <div className="grow shrink basis-0 ">
            <div className="flex flex-row justify-between m-0">
              <ol className=" flex list-none px-0 py-[14px] m-0">
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
          <div className="relative inline-block float-left h-[48px] ">
            <div className="my-[12px] mx-0 text-[12px] text-black leading-6 cursor-pointer">
              محبوب ترین
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[43px] mt-[20px] mr-[32px] mb-[10px] ml-0 ">
        <h1>قیمت انواع محصولات موبایل و تبلت </h1>
      </div>
      <div className="w-[95%] mx-auto grid grid-cols-cols-auto ">
        {data.map((item) => (
          <SellItem kala={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

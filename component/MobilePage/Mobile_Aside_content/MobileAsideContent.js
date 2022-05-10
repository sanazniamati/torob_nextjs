// component
import Inventory from "./Inventory";
import Price_filter from "./Price_filter";
import Search_all from "./Search_all";
import Select_Brand from "./Select_Brand";
import Smilar_category from "./Smilar_category";
import PriceMobileList from "./PriceMobileList";
import Most_Visited_Categories from "./Most_Visited_Categories";

export default function AsideContent() {
  return (
    <div className="right_content w-[384px] h-screen">
      <div className="filter_container px-4 pb-[140px] sticky top-0 bottom-0 overflow-y-auto ">
        <Select_Brand />
        <Smilar_category />
        <Price_filter />
        <Search_all />
        <Inventory />
        <PriceMobileList />
        <Most_Visited_Categories />
      </div>
    </div>
  );
}
const Aside_box = [
  { id: 0, title: "انتخاب برند", component_name: " <Select_Brand />" },
  { id: 0, title: "دسته های مشابه", component_name: " <Smilar_category />" },
  { id: 0, title: "قیمت (تومان)", component_name: " <Price_filter />" },
  { id: 0, title: "جستجو در نتایج", component_name: " <Search_all />" },
  { id: 0, title: "موجودی", component_name: "<Inventory />" },
];

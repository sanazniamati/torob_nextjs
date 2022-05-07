// component
import Inventory from "./Inventory";
import Most_Visited_Categories from "./Most_Visited_Categories";
import Price_filter from "./Price_filter";
import Search_all from "./Search_all";
import Select_Brand from "./Select_Brand";
import Smilar_category from "./Smilar_category";

export default function AsideContent() {
  return (
    <div className="right_content w-[384px] h-screen">
      <div className="filter_container px-4 pb-[140px] sticky top-0 bottom-0 overflow-y-auto ">
        <Select_Brand />
        <Smilar_category />
        <Price_filter />
        <Search_all />
        <Inventory />
        <Most_Visited_Categories />
      </div>
    </div>
  );
}

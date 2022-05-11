// json file
import data from "../../../DataJson/data.json";

// component
import SellItem from "./SellItem";

function Cards() {
  return (
    <div className="w-[95%] mx-auto grid grid-cols-cols-auto ">
      {data.map((item) => (
        <SellItem kala={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;

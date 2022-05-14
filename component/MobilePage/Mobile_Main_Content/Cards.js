// json file
import Link from "next/link";
import data from "../../../DataJson/data.json";

// component
import SellItem from "./SellItem";

function Cards() {
  return (
    <div className=" mx-[40px] justify-center">
      <Link href="#">
        <a className="grid gap-x-2 gap-y-2 grid-cols-cols-auto">
          {data.map((item) => (
            <SellItem kala={item} key={item.id} />
          ))}
        </a>
      </Link>
    </div>
  );
}

export default Cards;

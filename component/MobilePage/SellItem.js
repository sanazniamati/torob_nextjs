export default function SellItem(props) {
  return (
    <div className="w-[181px] h-[380px] p-[12px] rounded-[6px] m-[5px] cursor-pointer">
      <div className="w-[157px] h-[145px]">
        <img className="w-full h-full" src={props.kala.imageAddress} />
      </div>

      <div className="text-black text-[14px] font-[iranyekanwebregular] mt-[12px] mx-0 mb-[45px] overflow-hidden ">
        {props.kala.name}
      </div>
      <div className="mb-[12px] text-[#333333] text-[12px] font-bold font-[iranyekanwebregular]">{`از ${props.kala.price} تومان`}</div>
      <div className="text-[#808080] text-[14px] font-[iranyekanwebregular] ">{`در ${props.kala.marketCount} فروشگاه`}</div>
    </div>
  );
}

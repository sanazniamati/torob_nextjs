// library
import Image from "next/image";

export default function SellItem(props) {
  return (
    <div className="p-[12px]  rounded-[8px] cursor-pointer bg-white">
      <div className="w-full  ">
        <div className=" text-center mb-2 relative align-middle">
          <Image
            height={145}
            width={173.5}
            className="  mx-auto"
            src={props.kala.imageAddress}
            alt="/"
            // layout="fill"
          />
        </div>

        <h2 className=" text-black text-[14px] font-[iranyekanwebregular] my-[11.62px] leading-[1.5em] h-[4.5em]   overflow-hidden ">
          {props.kala.name}
        </h2>

        <div className="align-bottom h-[133px]">
          <div className="mt-4 leading-5 h-[28px] text-rose"></div>
          <div className="mt-[8px] text-[#333333] text-[12px] font-bold font-[iranyekanwebregular]">{`از ${props.kala.price} تومان`}</div>
          <div className="text-[#808080] text-[14px] font-[iranyekanwebregular] mt-2 h-[20px] overflow-hidden ">{`در ${props.kala.marketCount} فروشگاه`}</div>
          <div className="flex mt-2 px-2 mx-auto justify-around ">
            <div className=" mx-[10px]">
              <svg
                fill="#999"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                alt="favorite2"
              >
                <g>
                  <path
                    id="favorite2"
                    d="M21.233 3.881C20.077 2.693 18.535 2 16.898 2a6.268 6.268 0 0 0-4.433 1.881l-.385.396-.385-.396a6.104 6.104 0 0 0-8.768 0C1.674 5.07 1 6.752 1 8.436c0 1.683.674 3.366 1.83 4.554l8.48 8.713c.192.198.385.297.674.297.289 0 .481-.099.674-.297l8.479-8.713c1.156-1.188 1.83-2.871 1.83-4.554.193-1.684-.481-3.367-1.734-4.555zm-1.349 7.723l-7.804 8.02-7.804-8.02c-.867-.891-1.253-1.98-1.253-3.168 0-1.188.482-2.278 1.253-3.169.77-.89 1.927-1.287 2.987-1.287 1.156 0 2.216.396 3.083 1.287l1.06 1.09a.914.914 0 0 0 1.349 0l.963-1.09c.867-.792 1.927-1.287 3.18-1.287 1.156 0 2.216.495 3.083 1.287.77.891 1.252 1.98 1.252 3.169 0 1.188-.482 2.277-1.349 3.168z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className=" mx-[10px]">
              <svg
                fill="#999"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                alt="notification2"
              >
                <g>
                  <path
                    id="notification2"
                    d="M14.6 21.5C14 22.5 13 23 12 23c-.5 0-1-.1-1.5-.4-.5-.3-.8-.6-1.1-1.1-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4.1.1.2.3.4.4.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.4.5.2.5.9.2 1.4zM23 17c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1s.4-1 1-1c1.1 0 2-.9 2-2V9c0-4.4 3.6-8 8-8s8 3.6 8 8v5c0 1.1.9 2 2 2 .6 0 1 .4 1 1zm-4.5-1c-.3-.6-.5-1.3-.5-2V9c0-3.3-2.7-6-6-6S6 5.7 6 9v5c0 .7-.2 1.4-.5 2h13z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

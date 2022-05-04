import React from "react";

function MapContainer() {
  return (
    <div>
      <div className=" flex justify-center items-center  mt-[108px] ">
        <div className=" ">
          <iframe
            className=" text-center "
            src="https://maps.google.com/maps?q=35%C2%B042'12.1%22N%2051%C2%B021'00.6%22E&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            width="100%"
            height="100%"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapContainer;

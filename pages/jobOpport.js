// library
import React from "react";
import Image from "next/image";

// image & icons
import torobEmployers from "../public/image/torob_employers.jpg";

// componet
import Header from "../component/JobOpports/Header";

function JobOpport() {
  return (
    <div>
      <Header />
      <section>
        {" "}
        <Image src={torobEmployers} alt=""></Image>
      </section>
      <footer></footer>
    </div>
  );
}

export default JobOpport;

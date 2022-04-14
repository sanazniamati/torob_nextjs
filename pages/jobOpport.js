// library
import React from "react";
import Image from "next/image";

// image & icons
import torobEmployers from "../public/image/torob_employers.jpg";

// componet
import Header from "../component/JobOpports/Header";
import AboutUs from "../component/JobOpports/AboutUs";

function JobOpport() {
  return (
    <div>
      <Header />
      <section>
        <div className="w-full text-center">
          <Image src={torobEmployers} alt="torobEmployers" />
        </div>
      </section>
      <section>
        <AboutUs />
      </section>
      <footer></footer>
    </div>
  );
}

export default JobOpport;

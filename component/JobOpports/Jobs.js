import Link from "next/link";
import React from "react";

function Jobs() {
  return (
    <section>
      <div className="mt-[36px] px-[14.400px] w-full  ">
        {jobs_title.map((items) => (
          <div
            key={items.id}
            className="p-[7.200px] h-[84.39px] flex items-center w-full mb-[14.4px] border border-solid border-[#99bdc1c1] basis-full 1040:basis-[1/2] "
          >
            <div className="    ">
              <Link href="https://jobs.torob.com/jobs/rvqonv">
                <a>
                  <div className="flex items-center justify-around px-[14.400px] w-full h-[84.39px]    ">
                    <h3 className="text-[#616161] ">{items.jobTitle}</h3>

                    <button className="px-[8.64px] py-[7.2px] rounded-[5px] text-[11.52px] bg-rose text-white hover:bg-white">
                      <span className="mx-[3.6px] hover:text-rose">
                        {items.btnTitle}
                      </span>
                    </button>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="  pt-[21.600px] pb-[43.200px] text-center ">
        <Link href="https://jobs.torob.com/jobs">
          <a>
            <button className="bg-rose text-white rounded-5 px-[7.2px] py-[8.64px] text-[11.52px] ">
              مشاهده همه شغل ها
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
}
const jobs_title = [
  {
    id: 0,
    jobTitle: "کارشناس پشتیبانی فنی (دورکاری)",
    btnTitle: "پشتیبانی فنی",
  },
  {
    id: 1,
    jobTitle: "کارشناس پشتیبانی فروشگاه ها (دورکاری)",
    btnTitle: "میکسین",
  },
  { id: 2, jobTitle: "مدیر فروش (دورکاری)", btnTitle: "میکسین" },
  { id: 3, jobTitle: "(دورکاری) سرپرست طراحی گرافیک ", btnTitle: "طراحی" },
];

export default Jobs;

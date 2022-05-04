import Link from "next/link";
import React from "react";

function Jobs() {
  return (
    <>
      <div className="flex flex-wrap mt-[36px] px-[14.400px] md:px-[56px] lg:px-[88px]">
        {jobs_title.map((items) => (
          <div
            key={items.id}
            className="p-[7.200px]  flex items-center w-full 1040-screen:basis-1/2 1040-screen:p-[8px] lg:basis-1/2 lg:px-[8.8px]  "
          >
            <div className="   w-full">
              <Link href="https://jobs.torob.com/jobs/rvqonv">
                <a>
                  <div className="flex items-center justify-between px-[14.400px] border border-solid border-[#ededed] rounded-5 h-[86.39px] lg:px-[17.6px] lg:h-[105.59px] group  hover:bg-rose">
                    <h3 className="text-[#616161] group-hover:text-white ">
                      {items.jobTitle}
                    </h3>

                    <button className="py-[8.64px] px-[7.2px] rounded-[5px] text-[11.52px] bg-rose group-hover:bg-white group-hover:text-rose text-white md:py-[9.6px] md:px-[8px] ">
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
    </>
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

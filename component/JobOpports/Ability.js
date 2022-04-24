import React from "react";

function Ability() {
  return (
    <section>
      <div className="my-[5rem] ">
        <h2 className="text-[20.16px] text-[#616161] text-center ">
          قابلیت ها و جذابیت ها
        </h2>
        <div className=" contain my-9 flex flex-row grow-0 shrink basis-auto flex-wrap md:px-[56px]">
          {ability_items.map((items) => (
            <div
              key={items.id}
              className="p-4 basis-1/2 max-w-1/2 tablet:basis-[25%] md:basis-[16.66%] md:p-[8px]   "
            >
              <div className="h-[158.38px]">
                <div className="flex flex-col justify-center items-center bg-[#f9f9f9] h-full rounded-5 px-[2rem] ">
                  <div className="flex flex-1 justify-center items-center text-center ">
                    <div className="w-[36px] h-[36px]">{items.svg_icom}</div>
                  </div>
                  <div className="flex flex-1 justify-center items-center ">
                    <h3 className="text-[#b1b1b1e3] text-[11.52px]">
                      {items.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const ability_items = [
  {
    id: 0,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M23.3,2.74A17.77,17.77,0,0,0,9.62,9.16,1.37,1.37,0,0,0,11.69,11l0,0a15.09,15.09,0,1,1,0,19.29,1.37,1.37,0,0,0-2.14,1.72l0,0A17.81,17.81,0,1,0,23.3,2.74Z"></path>
        <path
          className="e26b39c3-829d-4589-9bdc-fd6b68289548"
          d="M1.37,19.19a1.37,1.37,0,1,0,0,2.74h11a1.37,1.37,0,1,0,0-2.74Z"
        ></path>
        <path
          className="e26b39c3-829d-4589-9bdc-fd6b68289548"
          d="M5.48,13.7a1.38,1.38,0,0,0,0,2.75h6.85a1.38,1.38,0,1,0,0-2.75Z"
        ></path>
        <path
          className="e26b39c3-829d-4589-9bdc-fd6b68289548"
          d="M5.48,24.67a1.38,1.38,0,0,0,0,2.75h6.86a1.38,1.38,0,1,0,0-2.75H5.48Z"
        ></path>
        <path
          className="e26b39c3-829d-4589-9bdc-fd6b68289548"
          d="M23.28,9.58A1.37,1.37,0,0,0,21.93,11h0v9.6a1.37,1.37,0,0,0,.4,1L27.82,27a1.37,1.37,0,1,0,2-1.88l-.06-.06-4.53-4.53a1.86,1.86,0,0,1-.55-1.31V11a1.37,1.37,0,0,0-1.35-1.39Z"
        ></path>
      </svg>
    ),
    title: "ساعات کاری منعطف",
  },
  {
    id: 1,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M37.19,13.27v-.33c0-1.69-.08-3.67-.08-5.86a2.7,2.7,0,0,0-1.93-2.62L21.4.12a3,3,0,0,0-1.67,0L6,4.46A2.75,2.75,0,0,0,4,7.08C4,9.26,4,11.19,4,12.94c-.16,6.32-.27,10.89,2,15.59A25.9,25.9,0,0,0,19.44,40.89a2.31,2.31,0,0,0,1.09.23,2.54,2.54,0,0,0,1-.2A25.89,25.89,0,0,0,35.1,28.54C37.39,24,37.31,19.71,37.19,13.27Zm-4.68,14h0A22.81,22.81,0,0,1,21.18,38a1.64,1.64,0,0,1-1.32,0A23,23,0,0,1,8.55,27.29c-1.91-4-1.84-7.93-1.72-13.94V13c0-1.52.07-3.16.08-4.92a1.24,1.24,0,0,1,.86-1.18L20,3.09a1.85,1.85,0,0,1,1.14,0L33.36,6.91a1.23,1.23,0,0,1,.86,1.17c0,1.81.05,3.48.08,4.93v.35C34.42,19.36,34.5,23.32,32.51,27.28Z"></path>
        <path
          className="a848f167-60e6-498f-8ab6-6477e60c918f"
          d="M28.34,17.92H22.51a.62.62,0,0,1-.62-.62V11.43a1.44,1.44,0,0,0-2.88,0V17.3a.62.62,0,0,1-.62.62H12.52a1.44,1.44,0,1,0,0,2.88h5.87a.62.62,0,0,1,.62.62v5.87a1.44,1.44,0,0,0,2.88,0V21.42a.62.62,0,0,1,.62-.62h5.87a1.45,1.45,0,0,0,1.44-1.44A1.48,1.48,0,0,0,28.34,17.92Z"
        ></path>
      </svg>
    ),
    title: "بیمه تکمیلی",
  },
  {
    id: 2,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M21.82,11.13a2.18,2.18,0,0,1,.5-1.17A8.54,8.54,0,0,1,23.57,8.9l.52-.38c1.43-1.1,3.33-3.06,3.23-7.31A1.19,1.19,0,0,0,27,.34,1.22,1.22,0,0,0,26.09,0l-.18,0a1.22,1.22,0,0,0-1.05,1.26c.08,3.5-1,4.33-2.27,5.3l-.42.31a9.3,9.3,0,0,0-1.73,1.54,4.92,4.92,0,0,0-1.09,2.71A11.87,11.87,0,0,0,8.74,22.87v6.45a11.82,11.82,0,0,0,23.64,0V22.87A11.87,11.87,0,0,0,21.82,11.13Zm2.27,8.21V18.27a3.55,3.55,0,0,0-2.3-3.3V13.61a9.35,9.35,0,0,1,7.12,5C27.74,19.3,26,19.33,24.09,19.34ZM21.63,22a1.07,1.07,0,1,1-2.14,0V18.27a1.07,1.07,0,0,1,2.14,0Zm-2.3-7a3.55,3.55,0,0,0-2.3,3.3v1.07c-2,0-3.65,0-4.82-.72a9.36,9.36,0,0,1,7.12-5ZM17,21.8V22a3.53,3.53,0,0,0,7.06,0V21.8h.23A11.68,11.68,0,0,0,29.73,21a9.3,9.3,0,0,1,.19,1.88v6.45a9.36,9.36,0,0,1-18.72,0V22.87A9.3,9.3,0,0,1,11.39,21a11.7,11.7,0,0,0,5.41.81Z"></path>
      </svg>
    ),
    title: "دورکاری",
  },
  {
    id: 3,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M38.25,35.29a4.91,4.91,0,0,0,.5-2.19,5.2,5.2,0,1,0-10.38-.51,4.17,4.17,0,0,0,0,.5,4.92,4.92,0,0,0,.5,2.2,6.37,6.37,0,0,0-1.8,1.33,6.28,6.28,0,0,0-1.79-1.33,5.06,5.06,0,0,0,.5-2.2,5.2,5.2,0,1,0-10.39,0,4.92,4.92,0,0,0,.5,2.2,6,6,0,0,0-1.79,1.33,6.75,6.75,0,0,0-1.81-1.34,5,5,0,0,0,.5-2.19,5.19,5.19,0,1,0-10.37,0,4.71,4.71,0,0,0,.5,2.18,4.94,4.94,0,0,0-3,4.15,1.19,1.19,0,0,0,2.38,0c0-.82.87-1.71,2.21-2.26a8,8,0,0,1,3-.58H7.7a8.08,8.08,0,0,1,3,.58c1.35.53,2.22,1.42,2.22,2.24a1.21,1.21,0,0,0,.26.88,1.18,1.18,0,0,0,1.67.18,1.18,1.18,0,0,0,.44-.8,1,1,0,0,0,0-.24c0-.81.87-1.7,2.2-2.26a8.66,8.66,0,0,1,6.18,0c1.34.55,2.2,1.44,2.21,2.25a1.19,1.19,0,0,0,1.05,1.31h.13a1.2,1.2,0,0,0,.75-.26,1.16,1.16,0,0,0,.43-.8,2.09,2.09,0,0,0,0-.24c0-.81.86-1.7,2.2-2.26a8.26,8.26,0,0,1,3-.57h.15a8,8,0,0,1,3,.57c1.34.54,2.21,1.43,2.21,2.26A1.2,1.2,0,0,0,40,40.61a1.19,1.19,0,0,0,1.19-1.2A4.92,4.92,0,0,0,38.25,35.29Zm-4.51-4.83a2.83,2.83,0,0,1,2.64,2.63,2.64,2.64,0,0,1-.39,1.4,11.22,11.22,0,0,0-2.39-.26h-.06a11.64,11.64,0,0,0-2.42.26,2.74,2.74,0,0,1-.38-1.39A2.82,2.82,0,0,1,33.74,30.46ZM23.41,33.05A2.83,2.83,0,0,1,23,34.49a11.47,11.47,0,0,0-2.41-.26h-.05a11.64,11.64,0,0,0-2.42.26,2.75,2.75,0,0,1-.38-1.4,2.79,2.79,0,0,1,.81-2,2.86,2.86,0,0,1,2-.84h0A2.83,2.83,0,0,1,23.41,33.05Zm-13,0a2.54,2.54,0,0,1-.38,1.4,11.36,11.36,0,0,0-2.39-.26h0a12.58,12.58,0,0,0-2.45.26,2.54,2.54,0,0,1-.38-1.4,2.8,2.8,0,0,1,2.81-2.81h0A2.81,2.81,0,0,1,10.39,33.09Z"></path>
        <path d="M2.4,2.78a1.92,1.92,0,0,0,.24,0h.9V20.63A5.41,5.41,0,0,0,9,26H32.22a5.41,5.41,0,0,0,5.41-5.41V2.78h1a1.18,1.18,0,0,0,1.18-1.06,1.17,1.17,0,0,0-.26-.88,1.18,1.18,0,0,0-.8-.43H2.65a1.13,1.13,0,0,0-.88.26,1.14,1.14,0,0,0-.43.8,1.15,1.15,0,0,0,.25.87A1.22,1.22,0,0,0,2.4,2.78ZM35.26,20.63a3.06,3.06,0,0,1-3,3H9a3.06,3.06,0,0,1-3-3V3.54a.76.76,0,0,1,.77-.76H34.49a.76.76,0,0,1,.77.76Z"></path>
        <path d="M10.55,11.67l3,1.52v4a3.08,3.08,0,0,0,2.18,2.64,11.7,11.7,0,0,0,4.81.91h.26a11.63,11.63,0,0,0,4.55-.92,3.08,3.08,0,0,0,2.19-2.65v-4l3-1.52a1.19,1.19,0,0,0,.66-1.13,1.21,1.21,0,0,0-.77-1L21,5.8a1.16,1.16,0,0,0-.86,0L10.58,9.5a1.21,1.21,0,0,0-.76,1.05A1.2,1.2,0,0,0,10.55,11.67Zm5.4,2.7,3.38,1.68.7.36a1.15,1.15,0,0,0,1.08,0l3.7-1.86.4-.18v2.81c-.21.36-1.85,1.21-4.64,1.21s-4.5-.93-4.63-1.2ZM14.61,10.5l5.87-2.28a.26.26,0,0,1,.21,0l5.87,2.28a.28.28,0,0,1,0,.52L20.71,14a.28.28,0,0,1-.25,0L14.59,11A.28.28,0,0,1,14.61,10.5Z"></path>
      </svg>
    ),
    title: "برنامه‌های آموزشی",
  },
  {
    id: 4,
    svg_icom: (
      <svg viewBox="0 0 41.1 41.1" fill="#c83635">
        <g>
          <path
            d="M27.4,23.3c-0.3,0.2-0.5,0.5-0.6,1c-0.1,0.7-0.4,1.2-0.8,1.9c-1.2,1.9-3.2,3.1-5.4,3.1c-1.7,0-3.3-0.6-4.5-1.9
  c-0.6-0.6-1.5-0.6-2.1,0c-0.3,0.3-0.4,0.7-0.4,1.1c0,0.4,0.2,0.8,0.4,1.1c1.8,1.8,4.1,2.8,6.6,2.8c3.3,0,6.4-1.8,7.9-4.6
  c0.6-0.9,1-1.7,1.2-2.8c0.2-0.8-0.3-1.5-1.2-1.7C28.1,22.9,27.7,23,27.4,23.3z"
          ></path>
          <path
            d="M16.7,6.8c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3c0.3-0.2,0.6-0.6,0.6-1c0.1-0.4-0.1-0.8-0.3-1.1l-1.1-1.4l2.4,0.3
  l2.6-0.3L22,5c-0.5,0.7-0.4,1.6,0.3,2.1c0.7,0.5,1.5,0.4,2.1-0.3l3.1-4.2c0.4-0.4,0.5-1,0.2-1.7c-0.3-0.6-0.9-0.9-1.5-0.8l-5.7,0.6
  l-5.7-0.6c-0.6,0-1.1,0.3-1.4,0.8c-0.3,0.5-0.3,1.2,0.1,1.6L16.7,6.8z"
          ></path>
          <path
            d="M20.6,7.4c-8.4,0-14.7,14.2-14.7,23.4C5.9,41,14,41,20.6,41s14.7,0,14.7-10.2C35.2,21.6,28.9,7.4,20.6,7.4z M32.2,30.8
  c0,6.9-4.2,7.2-11.7,7.2c-4.7,0-8.2-0.1-10-2c-1.1-1.1-1.6-2.8-1.6-5.3c0-4,1.4-9.3,3.7-13.4c2.4-4.4,5.3-7,7.9-7
  c2.6,0,5.6,2.6,8,7C30.8,21.5,32.2,26.7,32.2,30.8z"
          ></path>
        </g>
      </svg>
    ),
    title: "تسهیلات رفاهی",
  },
  {
    id: 5,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M20.67,10.62A20,20,0,0,0,4.28,19.17a1.27,1.27,0,0,0,.37,1.67,1.4,1.4,0,0,0,.67.18,1.21,1.21,0,0,0,1-.51A17.53,17.53,0,0,1,35,20.46a1.25,1.25,0,0,0,.79.47,1.16,1.16,0,0,0,.89-.21A1.21,1.21,0,0,0,36.94,19,20.07,20.07,0,0,0,20.67,10.62Z"></path>
        <path
          className="b8f5aa8b-62f1-4cba-8d59-87c3a979ccda"
          d="M20.67,24.35a6.24,6.24,0,1,0,6.24,6.24A6.25,6.25,0,0,0,20.67,24.35Zm3.84,6.24a3.84,3.84,0,1,1-3.84-3.84A3.85,3.85,0,0,1,24.51,30.59Z"
        ></path>
        <path
          className="b8f5aa8b-62f1-4cba-8d59-87c3a979ccda"
          d="M40.78,13.76a26.28,26.28,0,0,0-40.53.16A1.21,1.21,0,0,0,0,14.8a1.12,1.12,0,0,0,.44.8,1.25,1.25,0,0,0,.77.25,1.32,1.32,0,0,0,.9-.44A23.94,23.94,0,0,1,39,15.31a1.3,1.3,0,0,0,.84.41,1.18,1.18,0,0,0,.84-.28,1.07,1.07,0,0,0,.43-.79A1.17,1.17,0,0,0,40.78,13.76Z"
        ></path>
        <path
          className="b8f5aa8b-62f1-4cba-8d59-87c3a979ccda"
          d="M20.67,17.36A13.27,13.27,0,0,0,8.67,25a1.24,1.24,0,0,0,.62,1.61l.09,0a1.07,1.07,0,0,0,.4.09,1.2,1.2,0,0,0,1.1-.71,10.81,10.81,0,0,1,19.49-.19,1.3,1.3,0,0,0,.7.59,1.1,1.1,0,0,0,.92-.08,1.3,1.3,0,0,0,.59-.7,1.11,1.11,0,0,0-.08-.91A13,13,0,0,0,20.67,17.36Z"
        ></path>
      </svg>
    ),
    title: "اینترنت شخصی",
  },
  {
    id: 6,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M38.25,35,22.37,8.14a.7.7,0,0,1,0-.7L25.6,2A1.39,1.39,0,0,0,23.22.59L20.9,4.52a.4.4,0,0,1-.68,0L17.9.59A1.39,1.39,0,0,0,15.52,2l3.23,5.43a.68.68,0,0,1,0,.7L2.87,35A4.13,4.13,0,0,0,4.3,40.63a4.19,4.19,0,0,0,2.1.57H34.72a4.12,4.12,0,0,0,4.11-4.14A4.06,4.06,0,0,0,38.25,35Zm-18-23.9a.39.39,0,0,1,.67,0l4.61,7.78a1.27,1.27,0,0,1-1,.45c-.46,0-.6-.13-1.06-.55a4,4,0,0,0-5.7-.07l-.07.07c-.46.42-.64.55-1.06.55a1.27,1.27,0,0,1-1-.45ZM16.81,38.45a.4.4,0,0,1-.35-.6l2.91-5.13a1.38,1.38,0,0,1,1.88-.5,1.33,1.33,0,0,1,.5.5l2.91,5.13a.4.4,0,0,1-.35.6Zm19.11-.68a1.34,1.34,0,0,1-1.2.68H28.63a.79.79,0,0,1-.69-.39l-3.8-6.66a4.13,4.13,0,0,0-5.64-1.52A4,4,0,0,0,17,31.4l-3.81,6.66a.79.79,0,0,1-.69.39H6.4A1.37,1.37,0,0,1,5,37.08a1.31,1.31,0,0,1,.19-.69l9-15.12a3.88,3.88,0,0,0,2.38.82,4,4,0,0,0,2.89-1.24c.46-.41.64-.55,1.05-.55s.6.14,1.06.55a4.09,4.09,0,0,0,2.89,1.24,3.88,3.88,0,0,0,2.38-.82l9,15.12A1.34,1.34,0,0,1,35.92,37.77Z"></path>
      </svg>
    ),
    title: "اردوهای تیمی و آموزشی",
  },
  {
    id: 7,
    svg_icom: (
      <svg viewBox="0 0 41.1 41.1" fill="#c83635">
        <g>
          <g>
            <path
              className="st0"
              d="M28.9,8.7H37c2.3,0,4.1,1.8,4.1,4.1V17c0,1.5-0.8,2.9-2.1,3.6v15c0,2.3-1.8,4.1-4.1,4.1H6.1c-2.3,0-4.1-1.8-4.1-4.1V20.5C0.8,19.8,0,18.5,0,17v-4.1c0-2.3,1.8-4.1,4.1-4.1h8.2c-0.3-0.6-0.4-1.3-0.4-2.1c0-2.8,2.3-5.1,5.1-5.1c1.4,0,2.7,0.6,3.6,1.5c0.9-0.9,2.2-1.5,3.6-1.5c2.9,0,5.1,2.3,5.1,5.1C29.3,7.4,29.2,8.1,28.9,8.7z M19,11.8H5.1c-1.1,0-2.1,0.9-2.1,2.1v2.1C3.1,17.1,4,18,5.1,18H19V11.8z M22.1,11.8V18H36c1.1,0,2.1-0.9,2.1-2.1v-2.1c0-1.1-0.9-2.1-2.1-2.1H22.1z M19,21.1H5.1v13.4c0,1.1,0.9,2,2.1,2H19V21.1z M22.1,21.1v15.4h11.8c1.1,0,2.1-0.9,2.1-2V21.1H22.1z M14.9,6.7c0,1.1,0.9,2.1,2.1,2.1H19V6.7c0-1.1-0.9-2.1-2.1-2.1C15.8,4.6,14.9,5.5,14.9,6.7z M26.2,6.7c0-1.1-0.9-2.1-2.1-2.1c-1.1,0-2.1,0.9-2.1,2.1v2.1h2.1C25.3,8.7,26.2,7.8,26.2,6.7z"
            ></path>
          </g>
        </g>
      </svg>
    ),
    title: "پاداش عملکردی",
  },
  {
    id: 8,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M40.81,20.49h0A19.91,19.91,0,0,0,34.87,6.32a19.85,19.85,0,0,0-14-5.94h-.27A20.28,20.28,0,0,0,.31,20.63h0v.13a19.59,19.59,0,0,0,5.94,14,19.85,19.85,0,0,0,14,5.94h.27A20.23,20.23,0,0,0,34.87,34.8a19.75,19.75,0,0,0,5.94-14.31ZM38,19a16.29,16.29,0,0,1-9.72-4.19L32,11a1.34,1.34,0,1,0-1.89-1.89l-3.78,3.78a17.49,17.49,0,0,1-4.18-9.85A17.63,17.63,0,0,1,33,8.21,16.79,16.79,0,0,1,38,19ZM8.14,8.21A17.31,17.31,0,0,1,19.48,3.08a19.89,19.89,0,0,0,4.86,11.74l-3.78,3.92L11,9.15A1.34,1.34,0,1,0,9.09,11l9.58,9.59-3.78,3.78A20.15,20.15,0,0,0,3.15,19.28,17.14,17.14,0,0,1,8.14,8.21Zm-5,14a16.28,16.28,0,0,1,9.72,4.18L9.09,30.21a1.31,1.31,0,0,0,0,1.89,1.45,1.45,0,0,0,.94.41,1.48,1.48,0,0,0,1-.41l3.78-3.78a17.49,17.49,0,0,1,4.18,9.86,17.69,17.69,0,0,1-10.8-5.13A16.79,16.79,0,0,1,3.15,22.25ZM33,33.05a17.36,17.36,0,0,1-11.34,5.13,19.86,19.86,0,0,0-4.86-11.75l3.78-3.78,9.58,9.59a1.46,1.46,0,0,0,.95.4,1.44,1.44,0,0,0,.94-.4,1.3,1.3,0,0,0,0-1.89l-9.58-9.72,3.78-3.78A20.21,20.21,0,0,0,38,22,17.17,17.17,0,0,1,33,33.05Z"></path>
      </svg>
    ),
    title: "تسهیلات ورزشی",
  },
  {
    id: 9,
    svg_icom: (
      <svg viewBox="0 0 41.12 41.12" fill="#c83635">
        <path d="M40.07,23.14,26.49,9.54A1.18,1.18,0,0,0,26,9.26l-2.81-.95a1,1,0,0,1-.62-.62l-.95-2.81a1.18,1.18,0,0,0-.28-.45L18,1.05a3.59,3.59,0,0,0-5.07,0L10.27,3.71a1.13,1.13,0,0,0-.14,1.45,3.54,3.54,0,0,1-.42,4.52,3.62,3.62,0,0,1-4.52.44,1.17,1.17,0,0,0-1.47.14L1.05,12.93a3.6,3.6,0,0,0,0,5.07l3.38,3.37a1.24,1.24,0,0,0,.46.29l2.81.95a.94.94,0,0,1,.61.62L9.26,26a1.36,1.36,0,0,0,.28.46L23.13,40.07a3.59,3.59,0,0,0,5.07,0l2.3-2.3a1.17,1.17,0,0,0,.05-1.57,3.56,3.56,0,0,1-.62-3.34,3.68,3.68,0,0,1,2.62-2.42,3.61,3.61,0,0,1,3.11.8,1.16,1.16,0,0,0,1.49-.12l2.92-2.92A3.59,3.59,0,0,0,40.07,23.14Zm-1.62,3.42-2,2a.42.42,0,0,1-.48.07,5.72,5.72,0,0,0-4.55-.35A6,6,0,0,0,28,36.52.43.43,0,0,1,28,37l-1.4,1.41a1.29,1.29,0,0,1-1.8,0L12.13,25.8A4.54,4.54,0,0,1,11,24L10.4,22.2,22.2,10.4,24,11a4.45,4.45,0,0,1,1.78,1.1L38.45,24.76A1.27,1.27,0,0,1,38.45,26.56ZM20.54,8.8,8.79,20.54,6.1,19.63a1.06,1.06,0,0,1-.39-.24l-3-3a1.28,1.28,0,0,1,0-1.8l2-2a.15.15,0,0,1,.17,0,6,6,0,0,0,6.48-1.22,5.86,5.86,0,0,0,1.24-6.51.14.14,0,0,1,0-.17l2-2a1.29,1.29,0,0,1,1.8,0l3,3a1,1,0,0,1,.25.39Z"></path>
        <path
          className="e37a76a5-a5e1-4ed4-89be-78ff362ad338"
          d="M29.15,23.56a1.71,1.71,0,0,0-.61-.89l-.05,0h0l-1.3-.91A.34.34,0,0,1,27,21.4V19.84a1.77,1.77,0,0,0-.5-1.27,1.83,1.83,0,0,0-2.34-.18L23,19.33a.38.38,0,0,1-.34.05l-1.48-.5a1.78,1.78,0,0,0-1.36.09,1.75,1.75,0,0,0-.9,2.16l.5,1.48a.35.35,0,0,1-.06.34L18.4,24.2a1.73,1.73,0,0,0-.35,1.3,1.76,1.76,0,0,0,.71,1.19,1.78,1.78,0,0,0,1.07.35l1.55,0a.43.43,0,0,1,.32.16l.91,1.3a1.81,1.81,0,0,0,1.45.74,1.71,1.71,0,0,0,1-.33,1.79,1.79,0,0,0,.67-.92l.47-1.49a.36.36,0,0,1,.24-.25L28,25.77A1.77,1.77,0,0,0,29.15,23.56Zm-5.09,3.87h0l-.89-1.28a2.18,2.18,0,0,0-1.77-.91H19.84L20.76,24a2.16,2.16,0,0,0,.31-2l-.51-1.47,1.48.5a2.15,2.15,0,0,0,2-.31l1.25-.94,0,1.56a2.15,2.15,0,0,0,.91,1.79l1.27.89-1.49.47A2.15,2.15,0,0,0,24.52,26Z"
        ></path>
      </svg>
    ),
    title: "امکانات تفریحی",
  },
];
export default Ability;

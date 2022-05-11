// component
import MobileHeader from "../component/MobilePage/MobileHeader";
import MobileMainContent from "../component/MobilePage/Mobile_Main_Content/MobileMainContent";
import MobileAsideContent from "../component/MobilePage/Mobile_Aside_content/MobileAsideContent";

export default function Mobile() {
  return (
    <>
      <MobileHeader />
      <div className=" w-full flex  ">
        <div className="hidden 1025-screen:block">
          <MobileAsideContent />
        </div>
        <div className="w-full h-full bg-[#f2f3f5] ">
          <MobileMainContent />
        </div>
      </div>
    </>
  );
}

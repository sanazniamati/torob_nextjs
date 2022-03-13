// component
import MobileHeader from "../component/MobilePage/MobileHeader";
import MobileMainContent from "../component/MobilePage/MobileMainContent";
import MobileAsideContent from "../component/MobilePage/MobileAsideContent";

export default function Mobile() {
  return (
    <>
      <MobileHeader />
      <div className=" container inline-flex">
        <div className="w-96 bg-slate-500 h-screen hidden lg:block ">
          <MobileAsideContent />
        </div>
        <div className="w-full h-full ">
          <MobileMainContent />
        </div>
      </div>
    </>
  );
}

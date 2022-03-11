// component
import MobileHeader from "../component/MobilePage/MobileHeader";
import MobileMainContent from "../component/MobilePage/MobileMainContent";
import MobileAsideContent from "../component/MobilePage/MobileAsideContent";

export default function Mobile() {
  return (
    <>
      <MobileHeader />
      <section className="">
        <MobileMainContent />
        <MobileAsideContent />
      </section>
    </>
  );
}

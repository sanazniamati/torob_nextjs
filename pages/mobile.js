// component
import MobileHeader from "../component/MobilePage/MobileHeader";
import MainContent from "../component/MobilePage/MainContent";
import AsideContent from "../component/MobilePage/AsideContent";

export default function Mobile() {
  return (
    <>
      <MobileHeader />
      <section>
        <MainContent />
        <AsideContent />
      </section>
    </>
  );
}

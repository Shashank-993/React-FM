import ImageCarousel from "./ImageCarousel";
import ProductDescription from "./ProductDescription";
import DesktopGallery from "./DesktopGallery";

const MainSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center mx-auto md:max-w-xl lg:max-w-4xl lg:gap-(--space-l) lg:flex-row lg:justify-center lg:items-center xl:max-w-[68%] xl:gap-(--space-2xl)">
      <div className="grow-0 lg:hidden">
        <ImageCarousel />
      </div>
      <DesktopGallery />
      <ProductDescription />
    </section>
  );
};

export default MainSection;

import { useState } from "react";
import ImageLightBox from "./ImageLightBox";
import Thumbnails from "./Thumbnails";
import { images } from "@/utils/images";
import { useRef } from "react";
const DesktopGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef(null);

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    imageRef.current.style.transform = `
    perspective(1000px)
    rotateX(${y * -12}deg)
    rotateY(${x * 12}deg)
  `;
  };

  const handleLeave = () => {
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div className="hidden lg:flex flex-col items-center gap-(--space-s)">
      <div
        onClick={() => setIsOpen(true)}
        ref={imageRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="max-w-sm rounded-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer hover:shadow-2xl hover:shadow-black/25"
      >
        <img
          src={images[currentIndex]}
          className="w-full h-full object-cover"
          alt="image"
        />
      </div>
      <Thumbnails
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {isOpen && (
        <ImageLightBox
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default DesktopGallery;

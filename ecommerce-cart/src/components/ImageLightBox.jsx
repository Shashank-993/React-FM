import Modal from "./Modal";
import close from "../images/icon-close.svg";
import Thumbnails from "./Thumbnails";
import previousIcon from "../images/icon-previous.svg";
import nextIcon from "../images/icon-next.svg";
import { Button } from "./ui/button";
import { product } from "@/utils/product";
const ImageLightBox = ({ currentIndex, setCurrentIndex, onClose }) => {
  const previous = () =>
    setCurrentIndex(
      (currentIndex - 1 + product.images.length) % product.images.length,
    );

  const next = () =>
    setCurrentIndex((currentIndex + 1) % product.images.length);
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="relative flex flex-col items-end gap-(--space-s)">
        <img
          role="button"
          onClick={onClose}
          className="cursor-pointer w-7 h-7"
          src={close}
          alt="close-icon"
        />
        <Button
          variant="outline"
          onClick={previous}
          className="absolute cursor-pointer -left-4 top-55 rounded-full border-none"
        >
          <img src={previousIcon} alt="previous-icon" />
        </Button>
        <div className="w-sm rounded-xl overflow-hidden">
          <img
            src={product.images[currentIndex]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <Button
          variant="outline"
          onClick={next}
          className="absolute cursor-pointer -right-4 top-55 rounded-full border-none"
        >
          <img src={nextIcon} alt="next-icon" />
        </Button>
        <Thumbnails
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </Modal>
  );
};

export default ImageLightBox;

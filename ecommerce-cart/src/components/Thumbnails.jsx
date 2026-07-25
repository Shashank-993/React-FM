import { product } from "@/utils/product";
const Thumbnails = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="w-full flex justify-between items-center gap-(--space-xs)">
      {product.thumbnails.map((t, index) => (
        <div
          key={index}
          role="button"
          onClick={() => setCurrentIndex(index)}
          className={`
    relative
    w-21 h-21
    rounded-md
    overflow-hidden
    cursor-pointer
    border-2
    ${index === currentIndex ? "border-(--orange)" : "border-transparent"}
  `}
        >
          <img src={t} className="w-full h-full object-cover" />

          {index === currentIndex && (
            <div className="absolute inset-0 bg-(--pale-orange)/70" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { product } from "@/utils/product";
const ImageCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        {product.images.map((img) => (
          <CarouselItem>
            <Card className="max-w-xl mx-auto border-none overflow-hidden rounded-none lg:rounded-xl">
              <CardContent>
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="images"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 border-none" />
      <CarouselNext className="right-4 border-none" />
    </Carousel>
  );
};

export default ImageCarousel;

import React, { useState } from "react";
import "./image-carousel.styles.css";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="picture-slider" data-testid="image-carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img
        src={images[currentImageIndex].image_Url}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageCarousel;

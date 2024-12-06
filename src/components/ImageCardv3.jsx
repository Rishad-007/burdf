import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the lightbox styles

export const ImageCardv3 = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Function to open the lightbox
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openLightbox(index)} // Attach the onClick handler
          >
            <img
              src={image.url}
              alt={image.discription}
              className="object-cover w-full h-full transition-transform transform hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm font-semibold">{image.discription}</p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].url}
          nextSrc={images[(photoIndex + 1) % images.length].url}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

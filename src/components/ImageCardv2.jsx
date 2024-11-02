import React from "react";

export const ImageCardv2 = ({ url, discription, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={url}
          alt={discription}
          className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-semibold">{discription}</p>
        </div>
      </a>
    </div>
  );
};

{
  /* <div class="relative overflow-hidden rounded-lg shadow-md">
  <img
    src="../src/assets/image/labu.jpg"
    alt="Photo 1"
    class="object-cover w-full h-full transition-transform transform hover:scale-105"
  />
  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-100 md:opacity-0 transition-opacity hover:opacity-100">
    <p class="text-sm">Beautiful Landscape</p>
  </div>
</div>; */
}

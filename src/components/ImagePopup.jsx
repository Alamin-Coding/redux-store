import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function PopupImage({ images = [1, 2, 3], setIsOpen, selectImage, setSelectImage }) {
  const [isLiked, setIsLiked] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setSelectImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[selectImage];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Arrows */}
        {images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        {/* Image Container */}
        <div className="relative max-w-full max-h-full flex items-center justify-center p-8 hover:scale-[1.3] transition-allnm,./">
          <img
            src={currentImage}
            alt={currentImage}
            className={`max-w-full max-h-[80vh] object-contain transition-all duration-300 `}
          />
        </div>
      </div>
    </div>
  );
}

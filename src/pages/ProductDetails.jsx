import { Star, Heart, Truck, RotateCcw, Minus, Plus } from "lucide-react";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSingleProducts } from "../features/product/singleProductSlice";
import { useSelector } from "react-redux";
import { BouncingBalls } from "../components/PageLoadingEffects";
import { useState } from "react";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import PopupImage from "../components/ImagePopup";

const ProductDetails = () => {
  const [selectImage, setSelectImage] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, status, error } = useSelector((state) => state.singleProduct);
  const wishlist = useSelector((state) => state.wishlist);

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeImage = (number) => {
    setSelectImage(number);
  };
  const handlePopupImage = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    dispatch(getSingleProducts(`https://dummyjson.com/products/${id}`));
  }, [dispatch]);

  if (status === "loading") {
    return <BouncingBalls />;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="px-4 py-4 text-sm text-gray-500">
          <div className="max-w-7xl mx-auto">
            <Link to="/">Home</Link>
            <span className="mx-2">/</span>
            <Link to={item?.category}>{item?.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{item.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-8">
            {/* Left - Thumbnail Images */}
            <div className="flex flex-col gap-4 w-20">
              {item.images?.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-100 rounded border-2 border-gray-300 p-2 flex items-center justify-center"
                  onClick={() => handleChangeImage(index)}
                >
                  <img src={image} alt="image" />
                </div>
              ))}
            </div>

            {/* Center - Main Product Image */}
            <div className="flex-1 max-w-lg">
              <div
                className="bg-gray-100 rounded-lg p-12 h-96 flex items-center justify-center border"
                onClick={handlePopupImage}
              >
                <img
                  src={item.images ? item.images[selectImage] : 0}
                  alt="image"
                />
              </div>
            </div>

            {/* Right - Product Details */}
            <div className="w-80 space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-black mb-4">
                  {item.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(150 Reviews)</span>
                  <div className="w-px h-4 bg-gray-300 mx-2"></div>
                  <span className="text-sm text-green-500">In Stock</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-normal text-black mb-6">
                  ${item.price}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Colors */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-lg">Colours:</span>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-black cursor-pointer"></div>
                    <div className="w-5 h-5 bg-red-400 rounded-full cursor-pointer"></div>
                  </div>
                </div>

                {/* Size */}
                <div className="flex items-center gap-4">
                  <span className="text-lg">Size:</span>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className={`w-8 h-8 text-sm border rounded ${
                          size === "M"
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-white text-black border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Buttons */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center border-x border-gray-300">
                      2
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 bg-red-500 text-white">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded text-sm font-medium whitespace-nowrap">
                    Buy Now
                  </button>

                  <button
                    className="w-10 h-10 border border-gray-300 hover:border-gray-400 rounded flex items-center justify-center"
                    onClick={() => dispatch(addToWishlist(item.id))}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="space-y-4 pt-4">
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="w-6 h-6" />
                    <div>
                      <div className="font-medium text-sm">Free Delivery</div>
                      <div className="text-xs text-gray-600 underline">
                        Enter your postal code for Delivery Availability
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <RotateCcw className="w-6 h-6" />
                    <div>
                      <div className="font-medium text-sm">Return Delivery</div>
                      <div className="text-xs text-gray-600">
                        Free 30 Days Delivery Returns.{" "}
                        <span className="underline">Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <p>{item.description}</p>
      </div>
      {isOpen && <PopupImage images={item.images} setIsOpen={setIsOpen} selectImage={selectImage} setSelectImage={setSelectImage} />}
    </>
  );
};
export default ProductDetails;

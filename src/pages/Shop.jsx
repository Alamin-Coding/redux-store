import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import Pagination from "../components/Pagination";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";
import PriceRangeSlider from "../components/PriceRangeSlider";

const Shop = () => {
  const [filter, setFilter] = useState(false);
  const { products, status } = useSelector((state) => state.products);
  const priceArray = [
    ...new Set(products.map((item) => Math.floor(item.price))),
  ];
  const maxPrice = Math.max(...priceArray);
  console.log(maxPrice);

  const [showItems, setShowItems] = useState([]);

  const dispatch = useDispatch();

  let totalItems = products.length;
  //   const itemsPerPage = 12;
  const [itemsPerPage, setItemPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  const categoryItems = [...new Set(products.map((p) => p.category))];

  //  Show Category items
  const filterCategory = (category) => {
    setShowItems(products.filter((item) => item.category === category));
    setFilter(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handlePriceChange = (range) => {
    console.log("Price range changed:", range);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="pb-6 text-sm text-gray-500">
        <Link to="/">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-black">Shop</span>
      </div>

      <div className="flex gap-10">
        <div className="min-w-[200px]">
          <h5 className="pb-3 font-bold text-xl">Shop by Category</h5>
          <ul className="flex flex-col space-y-2">
            <li
              onClick={() => setFilter(false)}
              className={`${
                filter ? "text-slate-600" : "text-blue-600"
              } cursor-pointer`}
            >
              All
            </li>
            {categoryItems?.map((item) => (
              <li
                key={item}
                onClick={() => filterCategory(item)}
                className="text-slate-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          <h5 className="pb-1 pt-4 font-bold text-xl">Price</h5>
          <div className="w-full relative">
           
          </div>
          <PriceRangeSlider/>
        </div>
        <div>
          <div className="flex justify-end gap-3 pb-4 pr-2">
            <span>Show:</span>
            <select
              name=""
              id=""
              className="w-10 border"
              onChange={(e) => setItemPerPage(e.target.value)}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12" selected>
                12
              </option>
              <option value="18">18</option>
            </select>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filter
              ? showItems
                  ?.slice(
                    currentPage * itemsPerPage - itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : products
                  ?.slice(
                    currentPage * itemsPerPage - itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
          </div>

          <div>
            {filter ? (
              <Pagination
                currentPage={currentPage}
                totalItems={showItems.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            ) : (
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

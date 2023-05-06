import React from "react";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../store/reducers/products-slice";
import { Product } from "../types/Product";

const ProductsPage = () => {
  const products = useAppSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectValue, setSelectValue] = useState("");
  const [searchString, setSearchString] = useState("");
  const categories = getCategories(products.products);

  //fetch Data
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products.products);
  }, [products.products]);

  //Extract categories as a set
  function getCategories(products: Product[]) {
    const categories: string[] = [];
    products.map((p) => categories.push(p.category));
    const uniqueCat = [...new Set(categories)];
    return uniqueCat;
  }

  //Search
  useEffect(() => {
    const filteredProducts = products.products.filter((p) => {
      return (
        p.title.toLowerCase().includes(searchString) ||
        p.description.toLowerCase().includes(searchString)
      );
    });
    setFilteredProducts(filteredProducts);
  }, [searchString, products.products]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = event.target.value.toLowerCase();
      setSearchString(searchValue);
    },
    []
  );

  //Category
  useEffect(() => {
    const filteredCategory = products.products.filter((p) => {
      return p.category.includes(selectValue);
    });
    if (selectValue !== "Category") {
      setFilteredProducts(filteredCategory);
    } else {
      setFilteredProducts(products.products);
    }
  }, [selectValue, products.products]);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectValue(value);
  }

  return (
    <>
      <div className="mt-10 mx-10 grid grid-cols-3 gap-5">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={handleInputChange}
            />
          </div>
        </form>

        <select
          id="categories"
          onChange={handleSelectChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Category">Category</option>
          {categories.map((c: string) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      {products.loading && <div className="text-center mt-10">Loading...</div>}
      {!products.loading && products.error ? (
        <div>Error: {products.error}</div>
      ) : null}
      {!products.loading && products.products.length ? (
        <div className="container mx-auto mt-12">
          <ul className="flex flex-wrap  ">
            {filteredProducts.map((product: Product) => (
              <li
                className=" flex justify-center w-full md:w-1/2 lg:w-1/3 p-2"
                key={product.id}
              >
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ProductsPage;

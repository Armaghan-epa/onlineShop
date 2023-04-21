import { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/reducers/products-slice";
import { Product } from "../types/Product";

const ProductsPage = () => {
  const products = useAppSelector((state) => state.product);
  const [productList, setProductsList] = useState<Product[]>(products.products);
  const [selectValue, setSelectValue] = useState("");

  //fetch Data
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    setProductsList(products.products);
  }, []);

  //Search
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchString = event.target.value.toLowerCase();
      const filteredProducts = productList.filter((p) => {
        return (
          p.title.toLowerCase().includes(searchString) ||
          p.description.toLowerCase().includes(searchString)
        );
      });
      setProductsList(filteredProducts);
      if (searchString == "") {
        setProductsList(products.products);
      }
    },
    []
  );

  //Category
  function handleSelectChange(event: any) {
    const value = event.target.value;
    setSelectValue(value);

    const filteredCategory = productList.filter((p) => {
      return p.category.includes(value);
    });
    setProductsList(filteredCategory);
    if (value == "") {
      setProductsList(products.products);
    }
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
          id="countries"
          onChange={handleSelectChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Category</option>
          <option value="clothes">Clothes</option>
          <option value="devices">Digital Devices</option>
          <option value="accessories">Accessories</option>
          <option value="books">Books</option>
        </select>
      </div>
      {products.loading && <div>Loading...</div>}
      {!products.loading && products.error ? (
        <div>Error: {products.error}</div>
      ) : null}
      {!products.loading && products.products.length ? (
        <div className=" my-12 mx-10">
          <ul className="grid grid-cols-3 gap-4">
            {productList.map((product: Product) => (
              <li className="row-span-3" key={product.id}>
                <ProductCard props={product} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ProductsPage;

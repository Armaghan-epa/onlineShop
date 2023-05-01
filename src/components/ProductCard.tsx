import { useAppDispatch } from "../hooks/hooks";
import { cartActions } from "../store/reducers/cart-slice";
import { Product } from "../types/Product";

const ProductCard = (props: { product: Product }) => {
  const dispatch = useAppDispatch();

  const { product } = props;
  const { id, price, title, description } = product;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        description,
      })
    );
  };

  return (
    <div className=" h-full bg-white shadow rounded w-full m-5 mt-10">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>
      <div className="px-5 flex flex-col ">
        <h1 className="font-bold text-lg text-gray-800  mt-1">
          {product.title}
        </h1>
        <p className="text-xs font-light text-gray-500 mt-1">
          {product.description}
        </p>
        <div className="flex justify-between w-full mt-4 py- ">
          <div className="mt-6 text-gray-600">
            <span>price {product.price}$</span>
          </div>
          <button
            onClick={addToCartHandler}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500  mt-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import CartItem from "../components/CartItem";
import { useAppSelector } from "../hooks/hooks";
import { CartItemType } from "../types/CartItem";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <>
      <div className="container mx-auto mt-10 divide-slate-800">
        <div className="flex shadow-md my-10">
          <div className="w-full bg-white mx-4 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>

            <tr className="flex rounded-md px-7 pt-10 pb-5 bg-gray-500">
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6">
                number
              </td>
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6 text-center">
                Title
              </td>
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6 text-center">
                description
              </td>
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6 text-center">
                Quantity
              </td>
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6 text-center">
                Price
              </td>
              <td className="font-semibold text-center text-gray-100 text-xs uppercase w-1/6 text-center">
                Total Price
              </td>
            </tr>

            {items.map((item: CartItemType) => (
              <div key={item.id}>
                <CartItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

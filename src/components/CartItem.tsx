import { useAppSelector } from "../hooks/hooks";
import { CartItemType } from "../types/CartItem";

const CartItem = (props: { item: CartItemType }) => {
  const items = useAppSelector((state) => state.cart.items);
  const number = items.indexOf(props.item) + 1;

  const { item } = props;

  return (
    <tr className="flex items-center divide-black rounded-md px-6 py-5 even:bg-gray-100 odd:bg-gray-300">
      <td className="flex justify-center w-1/6">
        <span>{number}</span>
      </td>
      <td className="flex justify-center w-1/6">
        <span>{item.name}</span>
      </td>
      <td className="flex justify-center w-1/6">
        <span>{item.description}</span>
      </td>
      <td className="flex justify-center w-1/6">
        <div className=" w-6 h-5 bg-red-500 rounded-full">
          <svg
            className="fill-current text-gray-900 w-2 mt-1 mx-2"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>

        <span className="mx-3">{item.quantity}</span>

        <div className="px-2 w-6 h-5 bg-blue-500 rounded-full">
          <svg
            className="fill-current text-gray-900 w-2 mt-1"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
      </td>
      <td className="text-center w-1/6 font-semibold text-sm">${item.price}</td>
      <td className="text-center w-1/6 font-semibold text-sm">
        ${item.totalPrice}
      </td>
      <div className="px-2 w-7 h-6 bg-red-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-3"
        >
          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
        </svg>
      </div>
    </tr>
  );
};

export default CartItem;

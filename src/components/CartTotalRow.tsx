const CartTotalRow = (props: { totalValue: number }) => {
  const total = props.totalValue.toFixed(2);
  return (
    <tr className="flex items-center divide-black rounded-md px-6 py-5 bg-gray-100">
      <td className="flex justify-center w-1/6">
        <span>Total</span>
      </td>
      <td className="text-right w-4/6 font-semibold text-sm">${total}</td>
    </tr>
  );
};

export default CartTotalRow;

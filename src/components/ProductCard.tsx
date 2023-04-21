import { Product } from "../types/Product";

const p: Product = {
  id: 1,
  title: "Swatshirt",
  price: "25.0",
  category: "clothes",
  description: "crew-colorfull-very beautiful",
  image:
    "https://img01.ztat.net/article/spp-media-p1/0b43e2fbff1042d1a5479e81f0b342d9/1fadfe9ce441443bb99b6190b8d83518.jpg?imwidth=500&filter=packshot",
};

const ProductCard = (props: any) => {
  return (
    <>
      <div className="w-80 bg-white shadow rounded">
        <div
          className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
        <div className="p-4 flex flex-col ">
          <h1 className="font-bold text-lg text-gray-800  mt-1">
            {props.title}
          </h1>
          <p className="text-xs font-light text-gray-500 mt-1">
            {props.description}
          </p>
          <div className="flex justify-between w-full mt-4">
            <div className="mt-6 text-gray-600">
              <span>price {props.price}$</span>
            </div>
            <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500  mt-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

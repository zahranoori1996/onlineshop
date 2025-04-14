import { IProduct } from "../../types/servers";

type TProductItem = IProduct;

function ProductItem({title, price , description , image}:TProductItem) {
  return (
    <div className="flex flex-col rounded shadow-md py-2 w-[300px] h-[400px]">
     <div className="flex justify-center">
     <img
        className="rounded w-[150px] h-[200px] object-contain"
        src={image}
      />
     </div>
      <div className=" p-3 ">
        <h2 className="line-clamp-2 font-semibold my-3">{title}</h2>
        <div className="bg-amber-300 text-center rounded py-2">{price} تومان</div>
      </div>
      <div className="line-clamp-3">
        <p className="px-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;

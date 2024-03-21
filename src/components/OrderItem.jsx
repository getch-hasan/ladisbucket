import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import p1 from "../assets/product details & Design/LBBDMKF5021.03.jpeg";

const OrderItem = () => {
  return (
    <div className="max-w-xl relative w-full mx-auto flex items-center lg:flex-row rounded overflow-hidden shadow-lg p-4">
      <div className="badge absolute top-2 left-0 z-20 bg-[#660062] text-white origin-bottom -rotate-12">
        Delivered
      </div>
      <img
        className="w-full lg:w-1/4 h-32 md:h-40  object-cover"
        src={p1}
        alt="p1"
      />

      <div className="px-6 py-4 flex  justify-between items-center lg:w-3/4">
        <div>
          <div className=" mb-2">
            <h3 className="text-sm font-semibold">Panjabi</h3>
            <p className="text-gray-700  text-xs mb-2">
              Size: One Size Color Family: Black
            </p>
          </div>
          <p className="text-[#C50076] text-base mb-2"> $130 X 1</p>
          <p className="text-xs">
            <span className="text-green-500">Price: $130</span>
          </p>
        </div>
        <div className="flex justify-between gap-2 lg:justify-start">
          <div className="mb-2 lg:mb-0 btn btn-sm md:btn-md bg-[#FF44CB] text-white">
            Buy Again
          </div>
          <div className="btn btn-sm md:btn-md">Return</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex border-b-2 border-black min-w-1.5 mt-5 pt-2 mb-1 py-4  justify-between gap-x-5">
      
      <div className="max-h-[180px] w-[180px]">
        <img src={item.image} className="h-full w-full "/>
      </div>
      <div className="">
        <h1 className="text-gray-700 text-left font-semibold mt-1">{item.title}</h1>
        <h1 className="text-gray-400 ">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className="flex justify-between">
          <div className="text-green-600 font-semibold">
            <p className="font-bold">${item.price}</p>
          </div>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;

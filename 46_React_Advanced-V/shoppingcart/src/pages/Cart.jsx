import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useState, useEffect } from 'react';

const Cart = () => {

  const {cart} = useSelector( (state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () =>{
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])


  return (
    <div className="max-w-6xl p-2 mx-auto min-h-[80vh]">
      {
        cart.length > 0 ?
          (<div className="flex gap-x-5">

            <div className="max-w-xl">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>

            <div className="flex flex-col justify-between">

              <div className="flex flex-col mt-5 pt-2">
                
                <div className="text-green-600 font-semibold  uppercase">Your Cart</div>
                <div className="text-green-600 font-semibold text-3xl w-full text-left uppercase">Summary</div>
                <p className="mt-3">
                  <span>Total Item: {cart.length}</span>
                </p>

              </div>

              <div className="w-full">
                <p>Total Amount: ${totalAmount}</p>
                <button className="h-12 rounded-md p-4 m-2 bg-green-600">
                  Checkout Now
                </button>
              </div>

            </div>
            

          </div>):
          (<div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl">!!Cart Empty!!</h1>
            <Link to={"/"}>
              <button className="h-16 rounded-lg p-4 m-2 bg-red-600 text-center text-white">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;

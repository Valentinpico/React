import { useEffect, useState } from "react";
import { getAllGuitars, getCartByUser } from "../services/guitars";
import { GuitarModel } from "../models/guitarModel";

export const useCart = () => {
  const [data, setData] = useState<GuitarModel[]>([]);
  const [cart, setCart] = useState<GuitarModel[]>([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, guitar) => acc + guitar.price * guitar.quantity!,
      0
    );
    setTotal(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  useEffect(() => {
    getAllGuitars().then((data) => setData(data));
    getCartByUser(1).then((data) => setCart(data));
  }, []);

  return {
    data,
    setData,
    cart,
    setCart,
    total,
    setTotal,
    calculateTotal,
  };
};

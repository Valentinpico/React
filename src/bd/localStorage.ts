import { GuitarModel } from "../models/guitarModel";

export const saveCart = (cart: GuitarModel[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = (): GuitarModel[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

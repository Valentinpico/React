import { GuitarModel } from "../models/guitarModel";
import { URI_API, USER_ID } from "../utils/constants";

export const getAllGuitars = async () => {
  const response = await fetch(`${URI_API}/guitars`);
  const data: GuitarModel[] = await response.json();

  return data;
};

export const getCartByUser = async (id: Number = USER_ID) => {
  const response = await fetch(`${URI_API}/cart/${id}`);
  const data: GuitarModel[] = await response.json();
  return data;
};

export const postGuitarInCart = async (guitar: GuitarModel) => {
  const body = {
    userId: USER_ID,
    guitar_id: guitar.idGuitar,
    quantity: 1,
    guitarra: guitar,
  };

  const response = await fetch(`${URI_API}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return updateCart(response);
};

export const deleteGuitarInCart = async (guitar: GuitarModel) => {
  const response = await fetch(`${URI_API}/cart/${guitar.id}/${USER_ID}`, {
    method: "DELETE",
  });

  return updateCart(response);
};

export const changueQuantity = async (guitar: GuitarModel) => {
  const body = {
    id: guitar.id,
    userId: USER_ID,
    guitar_id: guitar.idGuitar,
    quantity: guitar.quantity,
    guitarra: {
      id: guitar.idGuitar,
      name: guitar.name,
      price: guitar.price,
      image: guitar.image,
    },
  };

  const response = await fetch(`${URI_API}/cart/${guitar.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return updateCart(response);
};

export const deleteCartByUser = async (id: Number = USER_ID) => {
  await fetch(`${URI_API}/cart/${id}`, {
    method: "DELETE",
  });
};

const updateCart = async (response: Response) => {
  const newCart: GuitarModel[] = await response.json();

  return newCart;
};

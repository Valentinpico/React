import { GuitarInCart } from "./GuitarInCart";
import { GuitarModel } from "../../models/guitarModel";
import { deleteCartByUser } from "../../services/guitars";
import { USER_ID } from "../../utils/constants";
interface CartProps {
  cart: GuitarModel[];
  setCart: (cart: GuitarModel[]) => void;
  total: Number;
}
export const Cart = ({ cart, setCart, total }: CartProps) => {
  const deleteCart = async () => {
    await deleteCartByUser(USER_ID);
    setCart([]);
  };

  if (cart.length == 0)
    return <p className="text-center">No hay productos en el carrito</p>;

  return (
    <>
      <table className="w-100 table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((guitar) => (
            <GuitarInCart
              key={guitar.id}
              setCart={setCart}
              cart={cart}
              guitar={guitar}
            />
          ))}
        </tbody>
      </table>

      <p className="text-end">
        Total pagar: <span className="fw-bold">${total.toString()}</span>
      </p>
      <button onClick={deleteCart} className="btn btn-dark w-100 mt-3 p-2">
        Vaciar Carrito
      </button>
    </>
  );
};

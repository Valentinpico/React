import { saveCart } from "../../bd/localStorage";
import { GuitarModel } from "../../models/guitarModel";
import { deleteGuitarInCart, changueQuantity } from "../../services/guitars";
import { MAX_QUANTITY, MIN_QUANTITY } from "../../utils/constants";

interface GuitarInCartProps {
  guitar: GuitarModel;
  cart: GuitarModel[];
  setCart: Function;
}

export const GuitarInCart = ({ guitar, setCart, cart }: GuitarInCartProps) => {
  const incrementItem = async () => {
    if (guitar.quantity === MAX_QUANTITY) return; // 5
    guitar.quantity! += 1;
    const newCart = await changueQuantity(guitar);
    setCart(newCart);
  };

  const decrementItem = async () => {
    if (guitar.quantity === MIN_QUANTITY) return; // 1
    guitar.quantity! -= 1;
    const newCart = await changueQuantity(guitar);
    setCart(newCart);
  };

  const deleteItem = async () => {
    const newCart = await deleteGuitarInCart(guitar);
    setCart(newCart);
  };
  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`./img/${guitar.image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{guitar.name}</td>
      <td className="fw-bold">${guitar.price}</td>
      <td className="flex align-items-start gap-4">
        <button onClick={decrementItem} type="button" className="btn btn-dark">
          -
        </button>
        {guitar.quantity}
        <button onClick={incrementItem} type="button" className="btn btn-dark">
          +
        </button>
      </td>
      <td>
        <button onClick={deleteItem} className="btn btn-danger" type="button">
          X
        </button>
      </td>
    </tr>
  );
};

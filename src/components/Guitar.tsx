import { saveCart } from "../bd/localStorage";
import { GuitarModel } from "../models/guitarModel";
import { changueQuantity, postGuitarInCart } from "../services/guitars";

interface GuitarProps {
  guitar: GuitarModel;
  cart: GuitarModel[];
  setCart: Function;
}

export const Guitar = ({ guitar, setCart, cart }: GuitarProps) => {
  const addToCart = async () => {
    const guitarIndex = cart.findIndex(
      (guitarItem) => guitarItem.idGuitar === guitar.id
    );
    
    if (guitarIndex === -1) {
      console.log(guitar);
      const newCart = await postGuitarInCart(guitar);
      setCart(newCart);
      return;
    }
    
    const newGuitar = cart[guitarIndex];

    if (newGuitar.quantity! == 5) return;
    newGuitar.quantity! += 1;
    console.log(newGuitar);

    const newCart = await changueQuantity(newGuitar);
    setCart(newCart); /*  */
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={"./img/" + guitar.image + ".jpg"}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          {guitar.name}
        </h3>
        <p>{guitar.description}</p>
        <p className="fw-black text-primary fs-3">${guitar.price}</p>
        <button
          onClick={addToCart}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

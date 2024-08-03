import { GuitarModel } from "../models/guitarModel";
import { Cart } from "./Cart/Cart";

interface HeaderProps {
  cart: GuitarModel[];
  setCart: Function;
  total: Number;
}
export const Header = ({ cart, setCart, total }: HeaderProps) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                <Cart total={total} setCart={setCart} cart={cart} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

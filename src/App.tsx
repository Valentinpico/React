import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Guitar } from "./components/Guitar";
import { GuitarModel } from "./models/guitarModel.ts";
import { useCart } from "./hooks/useCart.ts";
import { useEffect } from "react";
import { getCartByUser } from "./services/guitars.ts";

function App() {
  const { data, cart, setCart, total } = useCart();


  return (
    <>
      <Header cart={cart} total={total} setCart={setCart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data?.map((guitar: GuitarModel) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              cart={cart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Guitar } from "./components/Guitar";
import { db } from "./bd/data.ts";
import { GuitarModel } from "./models/guitarModel.ts";
import { ROLES } from "./bd/roles.ts";

function App() {
  const [data, setData] = useState(ROLES);
  const [consulta, setConsulta] = useState(false);

  const handlerAsist = (e: React.FormEvent<HTMLInputElement>, name: string) => {
    let value = parseInt(e.currentTarget.value, 10);
    console.log(data);
    if (isNaN(value)) {
      value = 0;
    }
    if (value >= 0) {
      setData((prevData) =>
        prevData.map((rol) => {
          if (rol.name === name) {
            return {
              ...rol,
              asist: value,
            };
          }
          return rol;
        })
      );
    }
  };

  const handleConsulta = () => {
    setConsulta(true);
  };

  const handleSubmit = () => {
    if (consulta) {
      setConsulta(false);
      data.map((rol) => {
        rol.asist = 0;
      });
    }
  };

  return (
    <>
      <h1>registro de entrada de personal</h1>

      <div>
        <h2>Asistencia de personal</h2>
        {/* elegir la fecha */}
        <label htmlFor="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" />
        <button
          onClick={() => handleConsulta()}
          type="submit"
          className="btn btn-primary"
        >
          Cargar
        </button>
        {/* tabla de asistencia */}
        <h3>Asistencia</h3>
        <table border={1}>
          <tbody>
            {data.map((rol) => (
              <tr key={rol.name}>
                <td>{rol.name}</td>
                <td>
                  <input
                    disabled={consulta}
                    type="number"
                    id={rol.name}
                    value={rol.asist}
                    onChange={(e) => handlerAsist(e, rol.name)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {/* BOTON DE ENVIAR */}
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            {!consulta ? "Enviar" : "Nuevos Datos"}
          </button>
        </table>
      </div>

      {/* <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data?.map((guitar: GuitarModel) => (
            <Guitar key={guitar.id} guitar={guitar} />
          ))}
        </div>
      </main>

      <Footer /> */}
    </>
  );
}

export default App;

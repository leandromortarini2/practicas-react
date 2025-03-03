import "./App.css";
import { Every } from "./Components/Every/Every";
import { Filter } from "./Components/Filter/Filter";
import { Find } from "./Components/Find/Find";
import { Map } from "./Components/Map/Map";

import { Reduce } from "./Components/Reduce/Reduce";
import { Some } from "./Components/Some/Some";
// import { Form } from "./Components/Form/Form";

function App() {
  const productos = [
    { id: 1, nombre: "Remera", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 0 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
  ];

  return (
    <div className="section">
      {/* <h1 className="title">formulario</h1>
      <Form /> */}
      <Every />
      <Filter productos={productos} />
      <Find />
      <Some />
      <Reduce />
      <Map />
    </div>
  );
}

export default App;

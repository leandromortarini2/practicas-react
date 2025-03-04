import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Every } from "./Components/Every/Every";
import { Filter } from "./Components/Filter/Filter";
import { Find } from "./Components/Find/Find";
import { Map } from "./Components/Map/Map";

import { Reduce } from "./Components/Reduce/Reduce";
import { Some } from "./Components/Some/Some";
import { Methods } from "./Pages/Methods/Methods";
import { NavBar } from "./Components/NavBar/NavBar";
import { Form } from "./Components/Form/Form";
// import { Form } from "./Components/Form/Form";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="method" element={<Methods />}>
          <Route path="every" element={<Every />} />
          <Route path="some" element={<Some />} />
          <Route path="find" element={<Find />} />
          <Route path="filter" element={<Filter />} />
          <Route path="map" element={<Map />} />
          <Route path="reduce" element={<Reduce />} />
        </Route>
        <Route path="formulario" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;

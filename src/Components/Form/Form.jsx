/* eslint-disable no-unused-vars */
import "../../App.css";
import { useEffect, useState } from "react";
import { ButtonLocalStorage } from "./buttonLocalStorage";

export const Form = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("dataForm")) || [];
    data.push(dataForm);

    localStorage.setItem("dataForm", JSON.stringify(data));

    setDataForm({
      email: "",
      password: "",
    });
  };

  const handleDelete = () => {
    localStorage.removeItem("dataForm");
    console.log(localStorage.getItem("dataForm"));
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button className="button">Guardar</button>
        <button onClick={handleDelete} className="buttonDelete">
          Eliminar
        </button>
        <ButtonLocalStorage />
      </form>
    </div>
  );
};

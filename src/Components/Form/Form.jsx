/* eslint-disable no-unused-vars */
import "../../App.css";
import { useEffect, useState } from "react";
import { ButtonLocalStorage } from "./buttonLocalStorage";
import { validator } from "../../utils/validations";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
    setError(validator(newForm)); // validás el nuevo form actualizado
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("dataForm")) || [];
    data.push(form);

    localStorage.setItem("dataForm", JSON.stringify(data));

    setForm({
      email: "",
      name: "",
    });
  };

  const handleDelete = () => {
    localStorage.removeItem("dataForm");
    console.log(localStorage.getItem("dataForm"));
  };

  return (
    <div className="container">
      <h2 className="title">Form</h2>

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="name"
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
        </div>{" "}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="correo@flowbite.com"
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={
              Object.keys(error).length > 0 || !form.name || !form.email
            }
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer disabled:cursor-default"
          >
            Submit
          </button>
          <button
            onClick={handleDelete}
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer "
          >
            Delete LocalStorage
          </button>
        </div>
        <p className="text-xl mt-10">Estado: {JSON.stringify(form)}</p>
        <p className="mt-10 font-bold">
          LocalStorage:{" "}
          <span className="font-light text-blue-950">
            {localStorage.getItem("dataForm")}
          </span>
        </p>
      </form>
    </div>
  );
};

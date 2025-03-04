/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleDropdown = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <nav className=" border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          React + Javascript
        </span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          ></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 text-white md:text-blue-500"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              {" "}
              <button
                onClick={handleDropdown}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 md:hover:bg-transparent cursor-pointer"
              >
                Metodos{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {open && (
                <div
                  id="dropdownNavbar"
                  className="z-10  font-normal  divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-700 divide-gray-600 absolute"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/filter"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Filter
                      </Link>
                    </li>
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/map"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Map
                      </Link>
                    </li>{" "}
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/some"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Some
                      </Link>
                    </li>{" "}
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/every"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Every
                      </Link>
                    </li>{" "}
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/find"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Find
                      </Link>
                    </li>{" "}
                    <li onClick={handleDropdown}>
                      <Link
                        to="method/reduce"
                        className="block px-4 py-2 hover:bg-gray-100 text-white hover:bg-gray-600 hover:text-white"
                      >
                        Reduce
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="formulario"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Formulario
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Axios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

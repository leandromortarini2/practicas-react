/* eslint-disable react/prop-types */

export const Filter = ({ productos }) => {
  const productosDisponibles = productos.filter((producto) => {
    return producto.precio > 0;
  });

  console.log("productosDisponibles", productosDisponibles);

  return (
    <div className="boxContent">
      <h1>Filter</h1>
      <ul>
        {" "}
        {productosDisponibles.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

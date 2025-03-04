export const Filter = () => {
  const productos = [
    { id: 1, nombre: "Remera", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 0 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
  ];
  const productosDisponibles = productos.filter((producto) => {
    return producto.precio > 0;
  });

  return (
    <div className="section">
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

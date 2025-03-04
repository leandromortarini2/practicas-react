export const Map = () => {
  const productos = [
    { id: 1, nombre: "Remera", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 8000 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
  ];

  // CORRECCION

  const productosConIVA = productos.map((producto) => {
    return {
      ...producto,
      iva: producto.precio * 0.21,
    };
  });

  return (
    <div className="section">
      <h1>Map</h1>
      {productosConIVA.map((producto) => {
        return (
          <div className="subbox" key={producto.id}>
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
            <p>IVA: {producto.iva}</p>
          </div>
        );
      })}
    </div>
  );
};

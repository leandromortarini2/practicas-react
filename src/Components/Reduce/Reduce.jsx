export const Reduce = () => {
  const productos = [
    { id: 1, nombre: "Remera", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 8000 },
    { id: 3, nombre: "Zapatillas", precio: 15000 },
  ];

  const productos2 = [
    { nombre: "Remera", stock: 10 },
    { nombre: "Pantalón", stock: 0 },
    { nombre: "Zapatillas", stock: 5 },
  ];

  productos2.filter((producto) => producto.stock > 0);

  // CORRECCION
  const total = productos.reduce((acc, product) => acc + product.precio, 0);

  return (
    <div className="boxContent">
      <h1>Reduce</h1>
      <p>total: {total}</p>
    </div>
  );
};

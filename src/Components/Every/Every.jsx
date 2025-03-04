export const Every = () => {
  const usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "Ana", activo: true },
    { nombre: "Pedro", activo: false },
  ];
  const todosConStock = usuarios.every((usuario) => usuario.activo);
  return (
    <div className="section">
      <h1>Every</h1>
      <p>
        ¿Todos los usuarios se encuentran activos? {todosConStock ? "Si" : "No"}
      </p>
    </div>
  );
};

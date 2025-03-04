export const Some = () => {
  const usuarios = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 19 },
    { nombre: "Pedro", edad: 16 },
  ];

  const mayor = usuarios.some((user) => user.edad > 18);

  console.log("mayor", mayor);

  return (
    <div className="section">
      <h1>Some</h1>
      <p>¿Hay al menos un mayor de edad? {mayor ? "Sí" : "No"}</p>
    </div>
  );
};

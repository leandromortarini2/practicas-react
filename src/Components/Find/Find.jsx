export const Find = () => {
  const usuarios = [
    { id: 1, nombre: "Juan", email: "juan@email.com" },
    { id: 2, nombre: "Ana", email: "ana@email.com" },
    { id: 3, nombre: "Pedro", email: "pedro@email.com" },
  ];

  const email = usuarios.find((item) => item.email === "ana@email.com");
  return (
    <div className="boxContent">
      <h1>Find</h1>
      <p>
        {email ? `${email.nombre} - ${email.email}` : "Usuario no encontrado"}
      </p>
    </div>
  );
};

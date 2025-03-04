export const validator = (input) => {
  let error = {};

  if (!input.name) {
    error.name = "El nombre es requerido";
  }

  if (!input.email) {
    error.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    error.email = "Formato de email inválido";
  }
  return error;
};

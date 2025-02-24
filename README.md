📋 Actividades Prácticas de React

💡 1. Actividad: Creación y Uso de Context en React

Objetivo: Aprender a crear un contexto global en React para compartir datos entre componentes y permitir su modificación desde distintos niveles del árbol de componentes.

Requisitos del Proyecto:
A. Crear un contexto llamado UserContext.
B. Almacenar un objeto con la siguiente estructura inicial en el contexto nombre: "Invitado", edad: 0
C. Mapear los valores del contexto en un componente UserDisplay para mostrarlos.
D. Modificar los valores del contexto desde otro componente UserForm
E. Al actualizar los datos desde UserForm, los cambios deben reflejarse automáticamente en UserDisplay.

---

🟢 2. React Router

Objetivo: Implementar rutas y navegación entre vistas.

Configuración básica:

Instala react-router-dom y configura BrowserRouter.
Rutas simples:

Crea tres páginas: Home, About y Products.
Usa Link para navegar entre ellas.
Rutas dinámicas:

En la página Products, crea una lista de productos con ID y nombre.
Usa useParams para acceder al ID en una ruta dinámica (/products/:id) y mostrar detalles del producto.
Outlet y rutas anidadas:

Crea una página Dashboard con rutas hijas (/dashboard/stats y /dashboard/settings).
Usa <Outlet /> para renderizar las rutas hijas.
Protección de rutas (Guards):

Implementa un PrivateRoute que permita el acceso solo si el usuario está autenticado.
Redirige al login si no hay autenticación.

---

🔵 3. Formularios y Validaciones
Objetivo: Dominar formularios controlados y su validación.

Formulario controlado:

Crea un formulario con campos: Nombre, Email y Mensaje.
Usa useState y onChange para actualizar el estado en tiempo real.
Validación básica:

Implementa una función de validación que muestre mensajes de error si los campos están vacíos o el email es inválido.
Validación avanzada:

Integra una librería como Formik o React Hook Form para validaciones más complejas.
Uso de event.target.value:

## Crea una función que, en cada cambio, muestre en consola el nombre del campo editado y su valor actual.

🟣 4. Axios y Manejo de APIs
Objetivo: Aprender a consumir APIs y manejar errores.

Petición básica:

Usa Axios para realizar una solicitud GET a una API pública.
Muestra los datos en una tabla.
Envío de datos:

Crea un formulario que permita enviar datos a la API usando POST.
Muestra una alerta de éxito o error según la respuesta.
Interceptors:

Configura un interceptor que agregue automáticamente un token de autenticación en cada solicitud.
Simula la autenticación y maneja errores globalmente.
Axios.create():

Crea una instancia personalizada de Axios con una baseURL y headers predefinidos.

---

🟤 6. Hooks Avanzados y Optimización

Objetivo: Aplicar hooks personalizados y técnicas de optimización.

useMemo y useCallback:

Crea un componente que tenga un contador y una lista filtrable.
Usa useMemo para evitar cálculos innecesarios y useCallback para memorizar funciones.
Custom Hooks:

Crea un hook personalizado useFetch que maneje solicitudes a APIs y devuelva datos, errores y un estado de carga.
useOptimistic:

Implementa un botón "Like" que actualiza la UI antes de recibir la respuesta del servidor.
Si el servidor falla, revierte el cambio.
useActionState:

Crea un formulario que maneje los estados "enviando", "éxito" y "error" al hacer una solicitud asíncrona.

---

# practicas-react

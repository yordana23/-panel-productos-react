const API_URL = "http://localhost:3000/api/productos";

async function procesarRespuesta(respuesta, mensajePorDefecto) {
  const datos = await respuesta.json().catch(() => null);

  if (!respuesta.ok) {
    const mensajeAPI = datos?.error ?? datos?.mensaje ?? datos?.message;
    throw new Error(mensajeAPI || mensajePorDefecto);
  }

  return datos;
}

export async function obtenerProductos() {
  const respuesta = await fetch(API_URL);
  return procesarRespuesta(respuesta, "No se pudieron obtener los productos");
}

export async function obtenerProducto(id) {
  const respuesta = await fetch(`${API_URL}/${id}`);
  return procesarRespuesta(respuesta, "No se pudo encontrar el producto");
}

export async function crearProducto(producto) {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  return procesarRespuesta(respuesta, "No se pudo registrar el producto");
}

export async function actualizarProducto(id, producto) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  return procesarRespuesta(respuesta, "No se pudo actualizar el producto");
}

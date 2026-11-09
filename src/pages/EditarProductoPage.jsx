import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductoForm from "../components/ProductoForm";
import { actualizarProducto, obtenerProducto } from "../services/productosApi";

function EditarProductoPage() {
  const { id } = useParams();
  const navegar = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarProducto() {
      setCargando(true);
      setError("");

      try {
        const datos = await obtenerProducto(id);
        setProducto(datos);
      } catch (error) {
        setError(error instanceof Error ? error.message : "No se encontró el producto");
      } finally {
        setCargando(false);
      }
    }

    cargarProducto();
  }, [id]);

  async function guardar(datos) {
    await actualizarProducto(id, datos);
    navegar("/modificar");
  }

  if (cargando) return <section className="panel"><p>Cargando producto...</p></section>;
  if (error) return <section className="panel"><p className="error">Error: {error}</p></section>;
  if (!producto) return <section className="panel"><p>No se encontró el producto.</p></section>;

  return (
    <section className="panel">
      <h2>Modificar producto: {producto.nombre}</h2>
      <ProductoForm
        key={producto.id}
        valoresIniciales={{
          nombre: producto.nombre ?? "",
          precio: String(producto.precio ?? ""),
          stock: String(producto.stock ?? ""),
        }}
        textoBoton="Guardar cambios"
        onGuardar={guardar}
        onCancelar={() => navegar("/modificar")}
      />
    </section>
  );
}

export default EditarProductoPage;

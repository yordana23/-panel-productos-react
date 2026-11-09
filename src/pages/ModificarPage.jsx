import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { obtenerProductos } from "../services/productosApi";
import TablaProductos from "../components/TablaProductos";

function ModificarPage() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    async function cargarProductos() {
      try {
        const datos = await obtenerProductos();
        setProductos(datos);
      } catch (error) {
        setError(error instanceof Error ? error.message : "No se pudieron cargar los productos");
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  function editar(producto) {
    navegar(`/modificar/${producto.id}`);
  }

  return (
    <section className="panel">
      <h2>Selecciona el producto que deseas modificar</h2>
      {cargando && <p>Cargando productos...</p>}
      {!cargando && error && <p className="error">Error: {error}</p>}
      {!cargando && !error && <TablaProductos productos={productos} mostrarEditar onEditar={editar} />}
    </section>
  );
}

export default ModificarPage;

import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productosApi";
import TablaProductos from "../components/TablaProductos";

function ConsultarPage() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <section className="panel">
      <h2>Lista de productos</h2>
      {cargando && <p>Cargando productos...</p>}
      {!cargando && error && <p className="error">Error: {error}</p>}
      {!cargando && !error && <TablaProductos productos={productos} />}
    </section>
  );
}

export default ConsultarPage;

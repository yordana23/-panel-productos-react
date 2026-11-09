import { useState } from "react";
import ProductoForm from "../components/ProductoForm";
import { crearProducto } from "../services/productosApi";

function InsertarPage() {
  const [mensaje, setMensaje] = useState("");

  async function guardar(datos) {
    setMensaje("");
    await crearProducto(datos);
    setMensaje(`El producto "${datos.nombre}" se registró correctamente.`);
  }

  return (
    <section className="panel">
      <h2>Registrar nuevo producto</h2>
      {mensaje && <p className="exito">{mensaje}</p>}
      <ProductoForm
        valoresIniciales={{ nombre: "", precio: "", stock: "0" }}
        textoBoton="Guardar producto"
        onGuardar={guardar}
        limpiarAlGuardar
      />
    </section>
  );
}

export default InsertarPage;

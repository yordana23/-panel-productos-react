import { ErrorMessage, Field, Form, Formik } from "formik";
import { productoSchema } from "../validaciones/productoSchema";

function ProductoForm({ valoresIniciales, textoBoton, onGuardar, limpiarAlGuardar = false, onCancelar }) {
  return (
    <Formik
      initialValues={valoresIniciales}
      validationSchema={productoSchema}
      onSubmit={async (valores, { setStatus, resetForm }) => {
        setStatus(undefined);

        try {
          await onGuardar({
            nombre: valores.nombre.trim(),
            precio: Number(valores.precio),
            stock: Number(valores.stock),
          });

          if (limpiarAlGuardar) resetForm();
        } catch (error) {
          setStatus(error instanceof Error ? error.message : "Ocurrió un error inesperado");
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="formulario">
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <Field id="nombre" name="nombre" type="text" />
            <ErrorMessage name="nombre" component="p" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="precio">Precio (S/)</label>
            <Field id="precio" name="precio" type="number" step="0.01" />
            <ErrorMessage name="precio" component="p" className="error" />
          </div>

          <div className="campo">
            <label htmlFor="stock">Stock</label>
            <Field id="stock" name="stock" type="number" step="1" />
            <ErrorMessage name="stock" component="p" className="error" />
          </div>

          {status && <p className="error">{status}</p>}

          <div className="acciones">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : textoBoton}
            </button>
            {onCancelar && (
              <button type="button" className="secundario" onClick={onCancelar}>
                Cancelar
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProductoForm;

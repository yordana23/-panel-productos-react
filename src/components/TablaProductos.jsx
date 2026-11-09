function TablaProductos({ productos, onEditar, mostrarEditar = false }) {
  if (productos.length === 0) {
    return <p>No hay productos registrados.</p>;
  }

  return (
    <div className="tabla-contenedor">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            {mostrarEditar && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>S/ {Number(producto.precio).toFixed(2)}</td>
              <td>{producto.stock > 0 ? producto.stock : <span className="agotado">Agotado</span>}</td>
              {mostrarEditar && (
                <td>
                  <button type="button" onClick={() => onEditar(producto)}>
                    Editar
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;

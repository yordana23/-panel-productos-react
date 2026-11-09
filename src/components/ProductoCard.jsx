function ProductoCard({ nombre, precio }) {
    return (
        <article>
            <h2>{nombre}</h2>
            <p>Precio: S/ {precio}</p>
        </article>
    );
}
export default ProductoCard;
import { useLocation } from "react-router";

function Header() {
  const { pathname } = useLocation();
  let titulo = "Consultar productos";

  if (pathname === "/insertar") {
    titulo = "Registrar producto";
  } else if (pathname.startsWith("/modificar/")) {
    titulo = "Modificar producto";
  } else if (pathname === "/modificar") {
    titulo = "Modificar productos";
  }

  return (
    <header className="encabezado">
      SENATI <span>›</span> <strong>{titulo}</strong>
    </header>
  );
}

export default Header;

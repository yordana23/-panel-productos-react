import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="marca">SENATI</h1>
      <nav className="menu">
        <NavLink to="/consultar" className={({ isActive }) => (isActive ? "menu-link activo" : "menu-link")}>
          📋 Consultar productos
        </NavLink>
        <NavLink to="/insertar" className={({ isActive }) => (isActive ? "menu-link activo" : "menu-link")}>
          ➕ Registrar producto
        </NavLink>
        <NavLink to="/modificar" className={({ isActive }) => (isActive ? "menu-link activo" : "menu-link")}>
          ✏️ Modificar productos
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;

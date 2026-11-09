import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <div className="principal">
        <Header />
        <main className="contenido">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

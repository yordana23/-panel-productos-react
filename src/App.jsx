import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ConsultarPage from "./pages/ConsultarPage";
import InsertarPage from "./pages/InsertarPage";
import ModificarPage from "./pages/ModificarPage";
import EditarProductoPage from "./pages/EditarProductoPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/consultar" replace />} />
        <Route path="consultar" element={<ConsultarPage />} />
        <Route path="insertar" element={<InsertarPage />} />
        <Route path="modificar" element={<ModificarPage />} />
        <Route path="modificar/:id" element={<EditarProductoPage />} />
        <Route path="*" element={<Navigate to="/consultar" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

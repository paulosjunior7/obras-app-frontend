import { Routes, Route, Navigate } from "react-router-dom";
import Obras from "./pages/Obras";
import Construcao from "./pages/Construcao";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Obras />} />
      <Route path="/obras/nova" element={<Construcao />} />
    </Routes>
  );
}

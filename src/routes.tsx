import { Routes, Route, Navigate } from "react-router-dom";
// import Construcao from "./pages/Construcao";
import Login from "./pages/Login/Login";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

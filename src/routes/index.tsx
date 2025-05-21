import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";

function AppRoutes() {
  return (
    // Antes era usado BrowserRouter, mas isso não permitia que a tela fosse carregada, apenas o background color
    // Usando o HashRouter, o problema foi resolvido no SCORM cloud, mas no avamec não é mais possível fazer o upload
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;

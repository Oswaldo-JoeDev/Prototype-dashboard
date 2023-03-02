import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<p>Login</p>} />
    </Routes>
  );
};

export default Router;

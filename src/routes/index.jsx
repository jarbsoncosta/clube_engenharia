import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SobrePage } from "../pages/Sobre";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre" element={<SobrePage />}></Route>

      {/* <Route path="/" element={<DefaultLayout />}></Route> */}
    </Routes>
  );
}

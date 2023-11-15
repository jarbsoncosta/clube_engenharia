import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SobrePage } from "../pages/Sobre";
import { ContatoPage } from "../pages/Contato";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre" element={<SobrePage />}></Route>
      <Route path="/contato" element={<ContatoPage />}></Route>

      {/* <Route path="/" element={<DefaultLayout />}></Route> */}
    </Routes>
  );
}

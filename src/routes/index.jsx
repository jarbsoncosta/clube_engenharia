import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SobrePage } from "../pages/Sobre";
import { ContatoPage } from "../pages/Contato";
import { VideosPage } from "../pages/Video";
import { ParceirosPage } from "../pages/Parceiros";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre" element={<SobrePage />}></Route>
      <Route path="/contato" element={<ContatoPage />}></Route>
      <Route path="/videos" element={<VideosPage />}></Route>

      <Route path="/parceiros" element={<ParceirosPage />}></Route>
      {/* <Route path="/" element={<DefaultLayout />}></Route> */}
    </Routes>
  );
}

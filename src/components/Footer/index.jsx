import { ContainerFooter, InfoFooter } from "./styles";
import { Link } from "react-router-dom";
export function FooterComponent() {
  return (
    <ContainerFooter>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">HOME</Link>
        <Link to="/sobre">SOBRE</Link>
        <Link to="#">CONTATO</Link>
        <Link to="#">FILIE-SE</Link>
      </div>
      <InfoFooter>
        <span>
          <i class="fa-solid fa-phone"></i>
          (84) 3335-0510 / 3335-0157
        </span>{" "}
        |
        <span>
          <i class="fa-solid fa-envelope"></i>
          <span>clube_engenharia@email.com</span>
        </span>
      </InfoFooter>
      <div>© 2023 Seu Site</div>
    </ContainerFooter>
  );
}
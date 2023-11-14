import { ContainerFooter, InfoFooter } from "./styles";

export function FooterComponent() {
  return (
    <ContainerFooter>
      <div style={{display:"flex", gap:"1rem"}}>
        <a href="">HOME</a>
        <a href="">SOBRE</a>
        <a href="">CONTATO</a>
        <a href="">FILIE-SE</a>
      </div>
      <InfoFooter>
        <span>
          <i class="fa-solid fa-phone"></i>
          (84) 3335-0510 / 3335-0157
        </span>{" "}
        |
        <span>
          <i class="fa-solid fa-envelope"></i>
          <span >clube_engenharia@email.com</span>
        </span>
      </InfoFooter>
      <div>© 2023 Seu Site</div>
    </ContainerFooter>
  );
}

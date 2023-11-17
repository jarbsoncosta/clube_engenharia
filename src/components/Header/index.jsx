import { Container, Header, TopHeader } from "./styles";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function HeaderComponent() {
  return (
    <Container>
      <TopHeader>
        {/* <ul class="list-icons">
            <li>
              <a title="Youtube"><i class="ph-fill ph-youtube-logo"></i></a>
            </li>            
            <li>
              <a title="Instagram"><i class="ph-fill ph-instagram-logo"></i></a>
            </li>
            <li>
              <a title="Facebook"><i class="ph-fill ph-facebook-logo"></i></a>
            </li>
            <li>
              <a title="Whatsapp"><i class="ph-fill ph-whatsapp-logo"></i></a>
            </li>
        </ul>  */}
        
      </TopHeader>
      <Header>
        <div className="nav">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <div className="nav-items">
            <NavLink to="/">INÍCIO</NavLink>

            <NavLink to="/sobre">SOBRE</NavLink>

            <NavLink to="/contato">CONTATO</NavLink>

            <NavLink className="link-associe" style={{ border: "none" }} to="#">
              ASSOCIE-SE
            </NavLink>
          </div>
        </div>
      </Header>
    </Container>
  );
}

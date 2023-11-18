import { NavLink } from "react-router-dom";
import {
  MenuButton,
  MenuContainer,
  MenuItem,
} from "./styles";
import {  useState } from "react";

export function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
     <MenuButton onClick={toggleMenu}><i class="fa-solid fa-bars"></i></MenuButton>
      <MenuContainer open={menuOpen}>
        <MenuItem> <NavLink to="/">INÍCIO</NavLink></MenuItem>
        <MenuItem> <NavLink to="/sobre">SOBRE</NavLink></MenuItem> 
        <MenuItem> <NavLink to="/contato">CONTATO</NavLink> </MenuItem> 
                
      </MenuContainer>
  </div>
  );
}

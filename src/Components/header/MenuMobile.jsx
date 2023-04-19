import { Link } from "react-router-dom";
import { Menu } from "./styles";

export const MenuMobile = ({ handleMenu }) => {

  return(
    <Menu>
        <ul>
            
            <Link to="/sobre"><li onClick={handleMenu}>Sobre</li></Link>
            <Link to="/projetos"><li onClick={handleMenu}>Projetos</li></Link>
            <Link to="/contato"><li onClick={handleMenu}>Contato</li></Link>
        </ul>
    </Menu>
  )
}
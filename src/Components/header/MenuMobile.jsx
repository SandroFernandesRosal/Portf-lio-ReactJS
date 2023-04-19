import { Link } from "react-router-dom";
import { Menu } from "./styles";
import { Card } from "./card";
import FotoPerfil from "./img/foto-perfil.png";

export const MenuMobile = ({ handleMenu }) => {

  return(
    <Menu>
        <ul>
            <Card img={FotoPerfil} name="Sandro Fernandes" title="Desenvolvedor Front-End JR" city="Rio de Janeiro"/>
            <Link to="/sobre"><li onClick={handleMenu}>Sobre</li></Link>
            <Link to="/projetos"><li onClick={handleMenu}>Projetos</li></Link>
            <Link to="/contato"><li onClick={handleMenu}>Contato</li></Link>
        </ul>
    </Menu>
  )
}
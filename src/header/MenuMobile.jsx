import { Link } from "react-router-dom"

export const MenuMobile = () => {

  return(
    <>
    
    <Link to="/sobre"><li>Sobre</li></Link>
    <Link to="/projetos"><li>Projetos</li></Link>
    <Link to="/contato"><li>Contato</li></Link>
    </>
  )
}
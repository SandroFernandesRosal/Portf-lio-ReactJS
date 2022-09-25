import "./projetos.css"
import RpzNovo from "./img/rpz-novo.png"
import RpzAntigo from "./img/rpz-antigo.png"
import PortfolioAntigo from "./img/portfolio-antigo.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react"

export const Projetos = () => {

  const Carousel = useRef(null)

  const prevSlide = (e) => {
    e.preventDefault();
    
    Carousel.current.scrollLeft -= Carousel.current.offsetWidth;
   
 }

 const nextSlide = (e) => {
   e.preventDefault(); 
  
    Carousel.current.scrollLeft  += Carousel.current.offsetWidth;
   
 }

  const CardProjeto = (props) => {

    return(
      <li>
        <img src={props.img}/>
        <button>Acessar</button>
        <button>Repositório</button>
      </li>
    )
  }

  return(
    <section className="projetos">
    <h1>Meus Projetos</h1>
    
    <div className="container-setas">
    <FaArrowLeft onClick={prevSlide} />
    <ul className="projetos-container"  ref={Carousel}>
    <CardProjeto img={RpzNovo}/>
    <CardProjeto img={RpzAntigo}/>
    <CardProjeto img={PortfolioAntigo}/>

    </ul>
    <FaArrowRight onClick={nextSlide} />
    </div>
    </section>
  )
}
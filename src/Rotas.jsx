import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Pages/index/Home";
import { Sobre } from "./Pages/sobre/Sobre";
import { Header } from "./header/Header";
import { Contato } from "./Pages/contato/Contato";
import { Projetos } from "./Pages/projetos/Projetos";
import { Light } from "./Light";
import { usePersistedState } from "./usePersistedState";
import { Footer } from "./footer/Footer";

export const Rotas = () => {
 
  
  const [theme , setTheme] = usePersistedState(false)
   
  const mudarTema = () => {
    
    theme === false ? setTheme(true) : setTheme(false)

  }

  return(
<>
    <BrowserRouter >

      {theme && <Light />}
      
      <Header mudar={mudarTema} tema={theme}/>
      
        <Routes>
          <Route element = {<Home />}  path="/" exact />
          <Route element = {<Sobre />}  path="/sobre" />
          <Route element = {<Contato />}  path="/contato" />
          <Route element = {<Projetos />}  path="/projetos" />
        </Routes>
        <Footer />
    </BrowserRouter>
   
   </>
  )
}
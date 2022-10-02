import { Route, HashRouter, Routes } from "react-router-dom";
import { Home } from "./Pages/index/Home";
import { Sobre } from "./Pages/sobre/Sobre";
import { Header } from "./header/Header";
import { Contato } from "./Pages/contato/Contato";
import { Projetos } from "./Pages/projetos/Projetos";


export const Rotas = () => {

  return(
<>
    <HashRouter basename="/">
    <Header />
    <Routes>
    <Route element = {<Home />}  path="/" exact />
    <Route element = {<Sobre />}  path="/sobre" />
    <Route element = {<Contato />}  path="/contato" />
    <Route element = {<Projetos />}  path="/projetos" />
   
    
    </Routes>
    
    
   </HashRouter>
   
   </>
  )
}
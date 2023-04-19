import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../Pages/index/Home";
import { Sobre } from "../Pages/sobre/Sobre";
import { Header } from "../Components/header/Header";
import { Contato } from "../Pages/contato/Contato";
import { Projetos } from "../Pages/projetos/Projetos";


import { Footer } from "../Components/footer/Footer";
import { useState } from "react";

export const Rotas = ({handleChangeTheme, theme}) => {
 
  

  return(
<>
    <BrowserRouter >

      
      
      <Header handleChangeTheme={handleChangeTheme} theme={theme}/>
      
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
import React from "react";
import { useState } from "react"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "./styles";
import { Sociais } from "../../Components/Sociais/Sociais";
import {BiHappyAlt} from "react-icons/bi"



export const Contato = () => {

  const form = useRef();

 const [nameInput, setNameInput] = useState('')
 const [emailInput, setEmailInput] = useState('')
 const [assuntoInput, setAssuntoInput] = useState('')
 const [textInput, setTextInput] = useState('')
 const [alert , setAlert ] = useState(false)

 const timeoutRef = useRef()

 const onSubmit = (e) => {
  e.preventDefault();
  
    emailjs.sendForm('gmailsfr', 'template_mumsd62', form.current, 'n_VePloj0wX6t-MH9')
      .then(() => {
        
        alert === false ? setAlert(true) : setAlert(false)
          
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setAlert(false)
        }, 2000);

      }, (error) => {
          alert(error.mensagem);
      });
      setNameInput('');
      setEmailInput('');
      setAssuntoInput('');
      setTextInput('');
      
      
 }


 

  return(
    <>
    
    <Container>
      
        {alert && <div className="alert-email">Mensagem enviada com sucesso! <BiHappyAlt /></div>}   

        <h1 className="h2-contato">Entre em contato</h1>

          

          <form ref={form} onSubmit={onSubmit}  name="form">
            <Sociais />
            <input required={true}  type="text" name="nome" id="nome" placeholder="Digite seu nome" value={nameInput} onChange={(e) => setNameInput(e.target.value)}  />

            <input  required={true} type="email" name="email" id="email" placeholder="Digite seu email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />

            <input required={true} type="text" name="assunto" id="assunto" placeholder="Digite o assunto" value={assuntoInput} onChange={(e) => setAssuntoInput(e.target.value)}/>

            <textarea required={true} name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Digite sua mensagem" value={textInput} onChange={(e) => setTextInput(e.target.value)} ></textarea>

            <button type="submit" name="submit">Enviar</button>
          </form>

      
    </Container>

    </>
  )
}
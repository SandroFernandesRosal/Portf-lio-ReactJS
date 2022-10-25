import {FaFacebook, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"

export const Sociais = () => {

  return(
    <div className="sociais">

   <a href="https://api.whatsapp.com/send?phone=5521969501614" target="blank">
      <FaWhatsapp />
   </a>  
    
        
    
        
    <a href="https://www.linkedin.com/in/sandro-fernandes-rosal-33365b240/" target="blank">
      <FaLinkedin />
    </a> 
    
    
    
    <a href="https://github.com/SandroFernandesRosal" target="blank">
     <FaGithub />
    </a>
    
    
    
    <a href="http://www.facebook.com/guilffc" target="blank">
      <FaFacebook />
    </a>
    
    
        </div>
  )
}
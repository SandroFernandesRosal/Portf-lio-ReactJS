import { createGlobalStyle } from "styled-components";

export const Light = createGlobalStyle`

body {
  background-color: gray;
  color: black;
}

svg {
  color: white;
  
}

.perfil-home {
  background-image: url(./img/img-perfil-light.jpg); }

.home h1, .home h2 {
  color: white
}

.home span {
  color: black;
}

.saiba-mais spam {
  color: black;
}



.header nav {
  background-color:#4F4F4F;
}

.item-skills {
  background-color: #4F4F4F;
}

.formation li {
  border-left: 1px groove white;
}

.formation li h4 {
  color: white;
  
}

.formation li::before {
  color: white;
 }


.menu-mobile {
  backdrop-filter: blur(8px);
    background-color: rgba(100, 100, 100, 0.1);
}



.botao-menu  {
  backdrop-filter: blur(8px);
  background-color: rgba(100, 100, 100, 0.1);
}

.logo {
  backdrop-filter: blur(8px);
  background-color: rgba(100, 100, 100, 0.1);
}

.card-perfil {
  backdrop-filter: blur(8px);
    background-color: rgba(100, 100, 100, 0.1);
}

.contato form {
  background-color:  #4F4F4F;
  
}

.contato form input, textarea {
  background-color: darkgray;
  
}

.contato form button {
  background-color: darkgray;
  color:black
}
footer {
  background-color: #4F4F4F;
  color: white;
}


`
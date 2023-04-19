import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
height: 100vh;
width: 100vw;
animation-name: contato;
animation-duration: 2s;
padding-top: 50px;

@keyframes contato {
  from {
    width: 0vw;
    
  }
  to {
     width: 100vw;
     
    }
}

h1 {
  margin-bottom: 10px;
  border-bottom: 2px solid green;
  
}


form {
  display: flex;
  flex-direction: column;
 
  background-color: ${({ theme }) => theme.colors.primaryBg};
  width: 75%;
  max-width: 500px;
  border-radius: 15px 0px 15px 0px;
  padding: 15px;
  border: 1px solid green;
  margin-top: 10px;
  
}

form input, textarea {
 margin: 3px;
 padding: 5px;
 text-align: center;
 background-color: ${({ theme }) => theme.colors.secundaryBg};
 color: white;
 border: 2px solid green;
 border-radius: 15px 0px 15px 0px;
 cursor: pointer;
 font-weight: 900;
 
}

form input:focus, textarea:focus {
  outline: none;
  
}

textarea {
  font-size: 16px;
}

form button {
  width: 40%;
  height: 10%;
  margin:10px auto;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: ${({ theme }) => theme.colors.secundaryBg};
  border-radius: 15px;
  border: 2px solid green;
  cursor: pointer;
  font-weight: 900;
}

form button:hover {
background-color: green;
color: white;
}



.alert-email {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 666667;

  font-weight: 900;
  
  background-color: #c1c1c1;;
  color: black;
  
  border: 1px solid green;
  border-radius: 10px;
  padding: 10px;
}

.alert-email svg {
  font-size: 30px;
  color: green;
}

`

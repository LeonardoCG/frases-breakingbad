import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 10%, #007d35 40%, #0f574e 100%); 
  background-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition:background-size .5s ease;
 
  &:hover{cursor: pointer;
  background-size: 180%;
 
  }
`;


function App() {

  // state de frases 
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breakingbadapi.com/api/quote/random');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  // cargar una frase con ussEfec 
  useEffect(() => {
      consultarAPI()
  }, [])

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      
      <Button
        onClick={consultarAPI}
      >
          Obtener Frase
      </Button>
    </Contenedor>
    
  );
}

export default App;

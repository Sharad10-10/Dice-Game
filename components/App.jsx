import React, { useState } from 'react';
import Styled from 'styled-components';
import '../components/App.css'
import StartGame from './StartGame';
import { GamePlay } from './GamePlay';

const Button = Styled.button `
  background-color : black;
  color : white;
  padding : 10px;
  cursor : pointer;
`

export default function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} />} 
      
    
    </>
  )
}

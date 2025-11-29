import React, { useState } from 'react';
import Styled from 'styled-components';
// import './App.css'
// import StartGame from './StartGame';
// import { GamePlay } from './GamePlay';
import '../components/App.css'
// import { StartGame } from '../components/StartGame'
import StartGame from './StartGame';
import { GamePlay } from '../components/GamePlay'


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

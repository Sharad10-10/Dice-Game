import React, {useState} from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Styled from 'styled-components'
import RollDice from "./RollDice";
import {Button} from '../components/buttons/buttons'
import Rules from "./Rules";

export const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState('');
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const resetScore = ()=> {
        setScore(0)
    }

    const rollDice = ()=> {
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber)

        if (!selectedNumber){
            setError("You have not selected any number")
            return;
        };
        setError('')

        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber)
        }
        else {
            setScore(prev => prev - 2)
        }

        setSelectedNumber(undefined)

    }

    const toggleRules = ()=> {
        setShowRules((prev) => !prev)
    }

  return (
    <>
      <MainContainer>
        <div className="top-section">
          <TotalScore  score = {score}/>
          <NumberSelector setError = {setError} selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber} error = {error}/>
        </div>
        <RollDice currentDice = {currentDice} rollDice = {rollDice}/>
        <div className="buttons">
            <Button onClick = {resetScore}>Reset</Button>
            {/* <Button onClick={toggleRules}>Show Rules</Button> */}
            <Button onClick={()=>setShowRules(true)}>Show Rules</Button>
        </div>
      </MainContainer>

      {showRules && <Rules onClose={() => setShowRules(false)} />}

      {/* {showRules ? <Rules /> : ""} */}
    </>
  );
};

const MainContainer = Styled.main` 

    padding-top : 72px;

    .top-section {
        display : flex;
        justify-content : space-around;
        align-items : end;
        
    }

    .buttons {
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        gap : 24px;
    }

`;




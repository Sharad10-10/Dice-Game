import React from 'react'
import Styled from 'styled-components';



const RollDice = ({ currentDice, rollDice }) => {
    
    

    


  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`../src/images/dice_${currentDice}.png`} alt="dice-1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = Styled.div `
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin-top : 48px;

    p {
        font-size : 24px
    }

    .dice {
    cursor : pointer;
    }

`
import React from 'react'
import Styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
        <div className="howToPlay"><h2>How to play dice game</h2></div>

        <div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be deducted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = Styled.div`
  max-width : 794px;
  background-color : #fbf1f1;
  padding : 20px;
  margin : 0 auto;
  margin-top : 40px;
  border-radius : 8px;

  h2 {
  font-weight : 24px;
  }
}`
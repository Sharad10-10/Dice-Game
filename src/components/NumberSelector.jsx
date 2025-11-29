import React from "react";
import Styled from "styled-components";

const NumberSelector = ({selectedNumber, setSelectedNumber,error, setError}) => {
  const boxArr = [1, 2, 3, 4, 5, 6];
 

  console.log(selectedNumber);

  const numberSelectHandler = (value)=> {
    setSelectedNumber(value)
    setError('')
  }

  return (
    <>
      <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="numberBox">
          {boxArr.map((value, index) => {
            return (
              <Box
                isSelected={value === selectedNumber}
                key={index}
                onClick={()=>numberSelectHandler(value)}
              >
                {value}
              </Box>
            );
          })}
        </div>

        <p>Select a Number</p>
      </NumberSelectorContainer>
    </>
  );
};

export default NumberSelector;


const NumberSelectorContainer = Styled.div`

    display : flex;
    flex-direction : column;
    align-items: end;

    .numberBox {
        display : flex;
        gap : 24px
    }
    
    p {
    font-size : 24px;
    font-weight : 500;
    
    }

    .error {
        color : red;
    }

`

const Box = Styled.div`

    height: 72px;
    width : 72px;
    border : 1px solid black;
    display : grid;
    place-items : center;
    font-size : 34px;
    font-weight : 700;
    background-color : ${(props) => (props.isSelected ? "black" : "white")};
    color : ${(props) => (props.isSelected ? "white" : "black")};
    cursor : pointer;

    `;

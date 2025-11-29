// import React from 'react'
// import Styled from 'styled-components'
// const Rules = () => {
//   return (
//     <RulesContainer>
//         <div className="howToPlay"><h2>How to play dice game</h2></div>

//         <div>
//             <p>Select any number</p>
//             <p>Click on dice image</p>
//             <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
//             <p>if you get wrong guess then  2 point will be deducted </p>
//         </div>
//     </RulesContainer>
//   )
// }

// export default Rules

// const RulesContainer = Styled.div`
//   max-width : 794px;
//   background-color : #fbf1f1;
//   padding : 20px;
//   margin : 0 auto;
//   margin-top : 40px;
//   border-radius : 8px;

//   h2 {
//   font-weight : 24px;
//   }
// }`


import React from "react";
import styled from "styled-components";

const Rules = ({ onClose }) => {
  return (
    <Overlay>
      <Popup>
        <button className="closeBtn" onClick={onClose}>✖</button>

        <h2>How to play dice game</h2>

        <div>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After clicking the dice, if selected number equals dice number, you
            gain the same points.
          </p>
          <p>If wrong guess, 2 points will be deducted.</p>
        </div>
      </Popup>
    </Overlay>
  );
};

export default Rules;

// ---------- Styled Components ----------
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Popup = styled.div`
  max-width: 500px;
  background: #fbf1f1;
  padding: 25px;
  border-radius: 10px;
  position: relative;

  h2 {
    margin-top: 0;
  }

  .closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

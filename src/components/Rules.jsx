
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

import Styled from 'styled-components';

export const Button = Styled.button `
    padding : 10px 10px;
    gap: 10px;
    min-width : 220px;
    background : #000000;
    border-radius : 5px;
    color : white;
    font-size : 16px;
    border : 1px solid transparent;
    cursor : pointer;
     transition : 0.4s background ease-in;

    &:hover {
        background-color:rgb(228, 224, 224);
        border : 1px solid black;
        color : black;
        transition : 0.3s background ease-in;
    }`;
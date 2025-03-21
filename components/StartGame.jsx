import React from 'react'
import Dices from '../src/images/dices 1.png'
import Styled from 'styled-components'
import {Button} from '../components/buttons/buttons'

const StartGame = ({ toggle }) => {
  return (
    <>
        <Container>
            <div>
                <img src={Dices} alt="" />
            </div>

            <div className='content'>
                <h1>
                    Dice Game
                </h1>

                <Button onClick = {toggle}>Play Now</Button>
            </div>

        </Container>
    
    </>
  )
}

export default StartGame

const Container = Styled.div `
    max-width : 1180px;
    display : flex;
    margin : 0 auto;
    height : 100vh;
    align-items : center;

    .content {
    h1 {
        font-size : 96px;
        white-space : nowrap
    }
    }

`

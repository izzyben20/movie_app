import React from 'react'
import styled from 'styled-components'
import hero from './hero.png'

const Hero = () => {
  return (
    <HeroContainer>
        <Text>
            Watch <br /> something <br />incredible.
        </Text>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.section`
    position: absolute;
    width: 100vw;
    height: 550px;
    left: 0px;
    top: 138px;
    display: flex;
    align-items: center;
    background: url(${hero}) no-repeat;
    /* background-size: contain;  */

    @media screen and (max-width: 768px) {
      width: 100vw;
    }
`

const Text = styled.h2`
    position: absolute;
    width: 490px;
    height: 282px;
    left: 77px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 94px;
    letter-spacing: -0.05em;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
      text-align: center;
      left: 0;
      width: 100%;
      margin: 0 auto;
    }
`
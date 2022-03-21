import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
        <HeaderSection>
            <LogoContainer>
                <Text>MyTestApp</Text>
            </LogoContainer>
        </HeaderSection>
    </>
  )
}

export default Header;

const HeaderSection = styled.header`
    position: absolute;
    width: 1440px;
    height: 140px;
    left: 0px;
    top: 0px;
    background: #292929;
`

const LogoContainer = styled.div`
    position: relative;
    width: 193px;
    height: 60px;
    left: 77px;
    top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
`

const Text = styled.h1`
    position: absolute;
    width: 156.7px;
    height: 32.94px;
    color: #ffffff;
    
`
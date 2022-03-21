import React from 'react'
import styled from 'styled-components'

const Search = ({ search, setSearch }) => {
  return (
    <Container>
        <SearchLabel>
            Search
        </SearchLabel>
        <Input 
            type={'text'} 
            value={search}
			onChange={(e) => setSearch(e.target.value)}
        />
    </Container>
  )
}

export default Search

const Container = styled.section`
    position:  relative;
    margin-left: 30px;
    padding-bottom: 100px;
    top: 700px;
`

const Input = styled.input`
    position: absolute;
    width: 1306px;
    height: 54px;
    left: 0px;
    top: 35px;
    border: 1px solid #000000;
    box-sizing: border-box;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 4px 0px;

    @media screen and (max-width: 768px) {
        width: 90vw;
    }
`

const SearchLabel = styled.p`
    position: absolute;
    width: 77px;
    height: 31px;
    left: 0px;
    top: 0px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px 0px;
`
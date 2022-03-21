import React from 'react'
import styled from 'styled-components'

const MovieCollection = ({ movies, search, collection }) => {
    console.log(movies.Search)

  return (
    <Container>
        <CategoryHeading>{search && search}</CategoryHeading>
        <MoviesContainer>
            {movies.Search && movies.Search.map(movie => (
                <Movie key={movie.imdbID}>
                <MovieTitle>{movie.Title}</MovieTitle>
                </Movie>
            ))}
        </MoviesContainer>
        <CategoryHeading>{search && search}</CategoryHeading>
        <MoviesContainer>
            {movies.Search && movies.Search.map(movie => (
                <Movie key={movie.imdbID}>
                <MovieTitle>{movie.Title}</MovieTitle>
                </Movie>
            ))}
        </MoviesContainer>
    </Container>
  )
}

export default MovieCollection

const Container = styled.section`
    position: absolute;
    width: 1552px;
    height: 349px;
    left: 30px;
    top: ${({ collection }) => collection ? '1000px' : '830px'};
`

const CategoryHeading = styled.h4`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
`

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    position: static;
    gap: 13px;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    
`

const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px;
    width: 300px;
    height: 300px;
    left: 0px;
    top: 0px;
    color: #ffff;
`

const MovieTitle = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`
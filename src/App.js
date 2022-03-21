import React, { useState, useEffect} from 'react'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MovieCollection from './components/MovieCollection/MovieCollection'
import Search from './components/Search/Search'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        /* position: relative; */
    }
`

const App = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    console.log(movies)

    useEffect(() => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=559b5757`
        

        const fetchMovies = async (search) => {
            axios.get(url).then(response => {
                setMovies(response.data)
            })
        }

        fetchMovies()
    }, [search])

    if(!movies) return null;
  return (
    <>
        <GlobalStyles />
        <Header />
        <Hero />
        <Search search={search} setSearch={setSearch} />
        <MovieCollection movies={movies} search={search}/>
        
    </>
  )
}

export default App
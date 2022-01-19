import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({omar}) => {
    return (
        <div className='mov'>
            {omar.map((el,i)=> <MovieCard ahmed ={el} key={i} /> )}
        </div>
    )
}

export default MovieList

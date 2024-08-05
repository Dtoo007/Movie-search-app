import React, { useState } from 'react'
import MovieCards from './MovieCards';



function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');
  
  
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7c17237c2dc6ece04cada2a47e5b78a1`
  
    try {
      //coode
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results)
      setMovies(data.results)
    }catch (err) {
      //code
      console.error(err);
    }
  }

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>Movie Name</label>
        <input className='input' type='text' name='query' placeholder='i.e. Jurassic Park'
        value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type='submit' onSubmit={searchMovies}>Search</button>
      </form>
      <div className='card-list'>
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCards key={movie.id} movie={movie}/>
        ))}
      </div>
    </>
  )
}

export default SearchMovies;
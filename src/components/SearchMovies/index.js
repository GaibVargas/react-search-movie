import React, { useState } from 'react';

import MovieCard from '../MovieCard';

import { Form, Card } from './styles';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    if(!query) return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=2ad1405110b7450c379ff65db3045a1a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <>
      <Form onSubmit={searchMovies}>
        <Form.label htmlFor="query">Movie Name</Form.label>
        <Form.input 
          type="text" 
          name="query"
          placeholder="i.e Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Form.button type="submit">Search</Form.button>
      </Form>

      <Card>
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Card>
    </>
  );
}
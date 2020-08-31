import React from 'react';

import { Card } from './styles';

export default function MovieCard({ movie }) {
  return (
    <Card>
      <Card.image 
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className="card-content">
        <Card.title>{movie.title}</Card.title>
        <p><small>RELEASE DATE:  {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card-desc">{movie.overview}</p>
      </div>
    </Card>
  );
}
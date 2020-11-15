import React, { Component } from "react";
//import "./userCard.scss";

import { Link } from "react-router-dom";

function MovieListItem({ movie , number}) {
  return (
    <div className="movie-list-item">
      <div className="tag">
        <h1>{number + 1}</h1>
      </div>
      <h2>
        {movie.title}
      </h2>
      <h3>Available on: {movie.service}</h3>
      <h4>{movie.runtime}</h4>
    </div>
  );
}

export default MovieListItem;
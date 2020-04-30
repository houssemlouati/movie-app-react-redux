import React from "react";
import MovieCard from "./movie-card";
import { connect } from "react-redux";
const MoviesContainer = (props) => {
  const { movies, keyword, countRating } = props;

  const filteredMovies = movies.filter(
    (movie) =>
      movie.star >= countRating &&
      movie.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="movies-container">
      {filteredMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  keyword: state.keyword,
  countRating: state.countRating,
});

export default connect(mapStateToProps)(MoviesContainer);
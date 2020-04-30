import React from "react";
import movies from "../data/movies-data";
import MoviesContainer from "../components/movie-container";
import FilterName from "../components/name-filter";
import RatingFilter from "../components/ratingFilter";
import Modall from "../components/modal";
import Navbar from "../components/navbar";


class MoviePage extends React.Component {
  state = {
    movies,
    movieName: "",
    ratingCountFilter: "",
  };

  handleSearch = (input) => {
    this.setState({
      movieName: input,
    });
  };
  handleRatingFilter = (newRating) => {
    this.setState({
      ratingCountFilter: newRating,
    });
  };

  addMovie= (newMovie) => {
      console.log(newMovie)
      this.setState({
          movies: [...this.state.movies,newMovie]
      })
  }

  render() {
    // let filterMovie = this.state.movies.filter(
    //   (movie) =>(
    //     (movie.star >= this.state.ratingCountFilter)&&
    //     (movie.name.toLowerCase().includes(this.state.movieName.toLowerCase()))
    // ));
    console.log(this.state.movies);
    return (
      <div >
    
        <div>
            <Modall add={this.addMovie}/>
        </div>

        <MoviesContainer  />
      </div>
    );
  }
}
export default MoviePage;
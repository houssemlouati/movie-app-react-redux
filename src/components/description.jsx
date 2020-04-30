import React from "react";
import { Redirect } from "react-router-dom";
import Rating from "./rating";
import { connect } from "react-redux";

class Description extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  render() {
    const targetMovie = this.props.movies.find(
      (movie) => movie.id == this.state.id
    );
    console.log(this.props.match);
    const { img, duration, year, name, id, star } = targetMovie;
    return (
      <div>
        
        {targetMovie ? (
          <div key={id}>
            <img src={img} />
            <h1>{name}</h1>
            <Rating count={star} />
            <span>
              {duration}- {year}
            </span>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});
    export default connect(mapStateToProps)(Description);
import React from "react";
import Rating from "./rating";
import { connect } from "react-redux";
import { deleteMovie } from "../redux/actions/actions";
import EditModal from "./edit-Modal";
import { Link, useHistory } from "react-router-dom";

const MovieCard = (props) => {
  const { movie, deleteMovie } = props;
  let history = useHistory()

  const handleClick = () => {
    return history.push(`/${movie.id}`)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Rating count={movie.star} />
      <img src={movie.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">
          {movie.duration} - {movie.year}
        </p>
        <div style={{ display: "flex" }}>
          <EditModal movie={movie} />
          <button
            className="btn btn-danger"
            onClick={() => deleteMovie(movie.id)}
          >
            Delete
          </button>
          <button className="btn btn-primary" onClick={handleClick}>description</button>
          
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => dispatch(deleteMovie(id)),
});

export default connect(null, mapDispatchToProps)(MovieCard);
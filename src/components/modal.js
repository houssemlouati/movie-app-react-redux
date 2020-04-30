import React from "react";
import Modal from "react-modal";
import "../App.css";
import { connect } from "react-redux";
import { addMovie } from "../redux/actions/actions";
class Modall extends React.Component {
  state = {
    modalIsOpen: false,
    img: "",
    name: "",
    star: "",
    year: "",
    duration: "",
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  add = (e) => {
    e.preventDefault();
    const { img, name, star, year, duration } = this.state;
    const newMovie = {
      img,
      name,
      star,
      year,
      duration,
    };
    console.log(newMovie);
    this.props.addMovie(newMovie);
    this.setState({
      modalIsOpen: false,
    });
  };
  render() {
    return (
      <div className="">
        <button className="btn" onClick={this.openModal}>
          <span role="img" aria-label="addmovie">
            Add 🎥
          </span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modall"
          contentLabel="Example Modal"
        >
          <label for="lname">Image Url</label>
          <input
            type="text"
            id="lname"
            name="img"
            placeholder="Image url.."
            onChange={this.handleChange}
          />
          <label for="fname">Film Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Film name.."
            onChange={this.handleChange}
          />

          <label for="lname">FIlm rating</label>
          <input
            type="text"
            id="lname"
            name="star"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />
          <label for="lname">year</label>
          <input
            type="text"
            id="lname"
            name="year"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />
          <label for="lname">duration</label>
          <input
            type="text"
            id="lname"
            name="duration"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />

          <button onClick={(e) => this.add(e)}>add movie</button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: (movie)=> dispatch(addMovie(movie))
})

export default connect(null, mapDispatchToProps)( Modall);
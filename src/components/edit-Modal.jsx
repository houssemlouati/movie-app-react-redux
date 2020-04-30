import React from "react";
import Modal from "react-modal";
import "../App.css";
import { connect } from "react-redux";
import { updateMovie } from "../redux/actions/actions";
class EditModal extends React.Component {
  state = {
    modalIsOpen: false,
    id: this.props.movie.id,
    img: this.props.movie.img,
    name: this.props.movie.name,
    star: this.props.movie.star,
    year: this.props.movie.year,
    duration: this.props.movie.duration,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal=()=> {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  update = (e) => {
    e.preventDefault();
    const { id, img, name, star, year, duration } = this.state;
    const updatedMovie = {
      id,
      img,
      name,
      star,
      year,
      duration,
    };
    
    this.props.updateMovie(updatedMovie);
    this.setState({
      modalIsOpen: false,
    });
  };
  render() {
    return (
      <div className="">
        <button className="btn btn-success" onClick={this.openModal}>
          Update
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="EditModal"
          contentLabel="Example Modal"
        >
          <label for="lname">Image Url</label>
          <input
            value={this.state.img}
            type="text"
            id="lname"
            name="img"
            placeholder="Image url.."
            onChange={this.handleChange}
          />
          <label for="fname">Film Name</label>
          <input
            value={this.state.name}
            type="text"
            id="fname"
            name="name"
            placeholder="Film name.."
            onChange={this.handleChange}
          />

          <label for="lname">FIlm rating</label>
          <input
            value={this.state.star}
            type="text"
            id="lname"
            name="star"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />
          <label for="lname">year</label>
          <input
            value={this.state.year}
            type="text"
            id="lname"
            name="year"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />
          <label for="lname">duration</label>
          <input
            value={this.state.duration}
            type="text"
            id="lname"
            name="duration"
            placeholder="Film rating.."
            onChange={this.handleChange}
          />

          <button className="btn btn-success" onClick={(e) => this.update(e)}>
            update movie
          </button>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateMovie: (movie) => dispatch(updateMovie(movie)),
});

export default connect(null, mapDispatchToProps)(EditModal);
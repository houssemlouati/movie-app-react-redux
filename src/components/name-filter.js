import React from "react";
import { searchKeyword } from "../redux/actions/actions";
import { connect } from "react-redux";

const FilterName = ({ searchKeyword }) => {
  return (
    <div>
      <input
        className="form-control"
        onChange={(e) => searchKeyword(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchKeyword: (input) => dispatch(searchKeyword(input)),
});

export default connect(null, mapDispatchToProps)(FilterName);
import React from "react";
import FilterName from "./name-filter";
import RatingFilter from "./ratingFilter";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        padding: "25px",
        borderBottom: "3px solid gray",
      }}
      className="filter-container"
    >
      <Link to="/">🏠 </Link>
      <FilterName />
      <RatingFilter />
    </div>
  );
};
export default Navbar;
import React from "react";

const Rating = (props) => {
  const { count,change } = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      star.push(<span onClick={()=>change(i+1)}>★</span>);
    } else {
      star.push(<span onClick={()=>change(i+1)}>☆</span>);
    }
  }
  return <div className="card-movie-rating">{star}</div>;
};
export default Rating;
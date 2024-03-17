import React from "react";

function Card(props) {
  return (
    <div className="inner-card-container">
      <img
        className="img-container"
        src={props.item.picture.thumbnail}
        alt="placeholder"
      />
      <div className="text-container">
        <h3>Ad: {props.item.name.first + " " + props.item.name.last} </h3>
        <p>Email: {props.item.email}</p>
        <p>
          {props.item.location.country + " | " + props.item.location.postcode}
        </p>
      </div>
    </div>
  );
}

export default Card;

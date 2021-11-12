import React from "react";
const People = ({ id, name, image }) => {
  return (
    <div className="people">
      <img src={image} alt={name} className="profile-image" />
      <div className="people-name">
        <button className="people-name">
          <h3>{name}</h3>
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};
export default People;

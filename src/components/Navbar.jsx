import React from "react";

function Navbar(props) {
  const handleNumberChange = (e) => {
    props.setPosts(e.target.value);
  };
  return (
    <div className="nav-bar-container">
      <h2>KULLANICILAR</h2>
      <input
        type="number"
        onChange={(event) => handleNumberChange(event)}
      ></input>
    </div>
  );
}

export default Navbar;

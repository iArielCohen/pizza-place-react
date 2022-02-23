import React from "react";

function MenuItem({ image, name, price }) {
  const handleClick = () => {
    alert("Thank You For Ordering But Sadlt This Is Just A Demo");
  };
  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
    </div>
  );
}

export default MenuItem;

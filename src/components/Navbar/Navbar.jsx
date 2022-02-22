import React from "react";
import pizzaLogo from "../../assets/pizza.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={pizzaLogo} />
      </div>
      <div className="rightSide">
        <Link>Home</Link>
      </div>
    </div>
  );
}

export default Navbar;

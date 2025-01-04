import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" className="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">Customer Panel</NavLink>
        </li>
        <li>
          <NavLink to="/question">Questions</NavLink>
        </li>
        {/* <li>
          <NavLink to="/ghazi">Ghazi</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;

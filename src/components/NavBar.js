import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover Movies ∞
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About this website ∞
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} exact={true} to="/">
        Go to Homepage
      </NavLink>
    </div>
  );
}

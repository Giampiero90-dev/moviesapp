import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink style={{ fontWeight: "bold" }} to="/discover">
        Discover Movies ∞
      </NavLink>
      <NavLink style={{ fontWeight: "bold" }} to="/about">
        About this website ∞
      </NavLink>
      <NavLink style={{ fontWeight: "bold" }} exact={true} to="/">
        Go to Homepage
      </NavLink>
    </div>
  );
}

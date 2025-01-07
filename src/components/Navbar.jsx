import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "../constants/posts";

const Navbar = () => {
  const currentUser = User;
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={`/user/${User.id}`}>{User.name}</NavLink>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const linkStyling = {
  margin: "20px",
  textDecoration: "none",
  color: "black",
};

const Navbar = () => {
  const items = useSelector((state)=> state.cart)
  return (
    <div
      style={{
        display: "flex", alignItems: "center",justifyContent: "space-between"
      }}
    >
      <span className="logo" style={{color:'blue'}}>REDUX Store.</span>
      <div>
        <Link
          style={linkStyling}
          className="nav-link"
          to={"/"}
        >
          Home
        </Link>
        <Link 
        style={linkStyling}
        className="nav-link" 
        to={"/cart"}
        >
          Cart
        </Link>
      </div>
      <span className="cartCount">Cart items: {items.length}</span>
    </div>
  );
};

export default Navbar;

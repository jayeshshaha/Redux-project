import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


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
          
          className="navLink"
          to={"/"}
        >
          Home
        </Link>
        <Link 

        className="navLink" 
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

import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-bar" onClick={toggleSidebar}>
        <i className="fas fa-arrow-left"></i> 
      </div>

      <div className={`side-navbar ${isOpen ? "open" : ""}`} id="sideNavbar">
        <p onClick={toggleSidebar}>
          <i id="side-navbar-close" className="fa-solid fa-xmark"></i>
        </p>
        <div className="side-navbar-links">
          <p className="side-navbar-link">
            <a href="#">Profile</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Wishlist</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Bag</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


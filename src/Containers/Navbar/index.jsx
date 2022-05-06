import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHovereItem] = useState(0);

  let { loading, setActivePage } = props;

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper {...props}>
      <div className={!loading ? "navbarWrapper active" : "navbarWrapper"}>
        <Link to="/">
          <img src="./assets/imgs/cua-cua-white.png" alt="" />
        </Link>
        <div
          className={isOpen ? "menuButton open" : "menuButton"}
          onClick={handleMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebarInnerWrapper">
          <div style={{ height: "25%" }}></div>
          <div className="sidebarItemsWrapper">
            <Link
              to="/menu"
              onMouseEnter={() => setHovereItem(1)}
              onMouseLeave={() => setHovereItem(0)}
              className={
                hoveredItem !== 0 && hoveredItem !== 1
                  ? "notActiveItem"
                  : undefined
              }
            >
              MENUS
            </Link>
            <Link
              to="/book-a-table"
              onMouseEnter={() => setHovereItem(2)}
              onMouseLeave={() => setHovereItem(0)}
              className={
                hoveredItem !== 0 && hoveredItem !== 2
                  ? "notActiveItem"
                  : undefined
              }
            >
              BOOK A TABLE
            </Link>
            <Link
              to="/membership"
              onMouseEnter={() => setHovereItem(3)}
              onMouseLeave={() => setHovereItem(0)}
              className={
                hoveredItem !== 0 && hoveredItem !== 3
                  ? "notActiveItem"
                  : undefined
              }
            >
              MEMBERSHIP
            </Link>
            <Link
              to="/contacts"
              onMouseEnter={() => setHovereItem(4)}
              onMouseLeave={() => setHovereItem(0)}
              onClick={() => {
                setActivePage("contacts");
                setIsOpen(false);
              }}
              className={
                hoveredItem !== 0 && hoveredItem !== 4
                  ? "notActiveItem"
                  : undefined
              }
            >
              CONTACTS US
            </Link>
          </div>
          <div className="sidebarFooter">
            <a href="https://www.facebook.com/cuacuaclub/" target="_blank">
              <img src="./assets/icons/facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/cuacuaclub/" target="_blank">
              <img src="./assets/icons/instagram.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src="./assets/icons/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

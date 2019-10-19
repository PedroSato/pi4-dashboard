import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1em;
  background-color: #000;
`;

const BurgerMenu = styled.div`
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #cacaca;
    position: absolute;
    display: block;
    content: "";
  }

  & span:before {
    top: -10px;
  }

  & span:after {
    bottom: -10px;
  }
`;

const Avatar = styled.img`
    border-radius:50%;
    height:3em;
    width:3em;
    margin: 0 0 0 71em;
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <BurgerMenu
        onClick={() => {
          toggleMenu(true);
          console.log("Hamburger menu clicked, toggle open");
        }}
      >
        <span />
      </BurgerMenu>
      <Avatar src="https://icon-library.net/images/user-icon-image/user-icon-image-21.jpg"/><p>Hello, visitor</p>
    </NavWrapper>
  );
};

export default Navbar;
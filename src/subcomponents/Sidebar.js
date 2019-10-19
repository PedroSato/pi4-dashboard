import React from "react";
import styled from "styled-components";

const SidebarStyled = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  width: 80%;
  background-color: #000;
  padding: 1rem;
  color: #fff;
  max-width: 300px;
  height: 100%;
  transform: translateX(${props => (props.show ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;
`;

const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: inherit;
  padding: 1em 2rem;
  font-size: 18px;

  &:first-of-type {
    margin-top: 50px;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: white;
    position: absolute;
    display: block;
    content: "";
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

const Sidebar = ({ show, setIsOpened }) => {
  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
            console.log("Close icon clicked, close sidebar");
          }}
        >
          <span />
        </CloseIcon>
        <Link href="http://localhost:3000/">Home</Link>
        <Link href="http://localhost:3000/produtos/cadastro">Cadastro de produtos</Link>
        <Link href="http://localhost:3000/novo-usuario">Cadastro de usuários</Link>
        <Link href="http://localhost:3000/produtos">Listagem de produtos</Link>
        <Link href="link here">Relatório</Link>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;

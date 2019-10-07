import React from 'react' //<-------Javascript n precisa terminar em ; só ir para a próxima linha que tudo ok
import styled from 'styled-components'
// arrow function (aqui vão os parâmetros) => {aqui vai o código da função}

const HeaderWrapper = styled.div`
    overflow: hidden;
  background-color: #13ce67;
  padding:0;
  position:fixed;
  width:100%;
  height:4em;
  display:flex;
  justify-content:space-between;
  top:0;
`;

const Logout = styled.div`
    font-family: 'Raleway', sans-serif;
    width:15%;
    height:4em;
    background-color: transparent;
    display:flex;
    flex-wrap:nowrap;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    
`;
const LogoutText = styled.h6`
    text-transform:uppercase;
    font-size:1.5em;
    margin:0;
`;

const DropdownMenu = styled.div`
    width:10%;
    height:4em;
    background-color:#000;
`;

const Avatar = styled.img`
    border-radius:50%;
    height:4em;
    width:4em;

`;



const Header = () => { // <---- declaração de função em javascript e SIM vc coloca ela dentro de uma variável constante
    return (
        <HeaderWrapper>
            <DropdownMenu />
            <Logout>
                <LogoutText>Logout</LogoutText>
                <Avatar src="https://www.bluecross.org.uk/sites/default/files/d8/assets/images/118809lprLR.jpg"></Avatar>
            </Logout>
        </HeaderWrapper>
    )
}

export default Header; //<--- não precisa mas pode :) e ai vc exporta o componente pra chamar em outros lugares
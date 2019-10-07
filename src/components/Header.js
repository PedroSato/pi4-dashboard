import React from 'react' //<-------Javascript n precisa terminar em ; só ir para a próxima linha que tudo ok
import styled from 'styled-components'
// arrow function (aqui vão os parâmetros) => {aqui vai o código da função}

const HeaderWrapper = styled.div`
    z-index: 40px;
    overflow: hidden;
    background-color: gray;
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

function getWidthString(span){
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%;`
}

const ColumnWrapper = styled.div`
    float: left;
    ${({ xs })=> (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};  
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};  
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};  
    }
`

const Header = () => { // <---- declaração de função em javascript e SIM vc coloca ela dentro de uma variável constante
    return (
        <ColumnWrapper>
            <HeaderWrapper>
                <DropdownMenu />
                <Logout>
                    <LogoutText>Logout</LogoutText>
                    <Avatar src="https://www.bluecross.org.uk/sites/default/files/d8/assets/images/118809lprLR.jpg"></Avatar>
                </Logout>
            </HeaderWrapper>
        </ColumnWrapper>
    )
}

export default Header; //<--- não precisa mas pode :) e ai vc exporta o componente pra chamar em outros lugares
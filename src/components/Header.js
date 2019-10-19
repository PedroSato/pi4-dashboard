import React, { useState } from 'react' //<-------Javascript n precisa terminar em ; só ir para a próxima linha que tudo ok
import styled from 'styled-components'
// arrow function (aqui vão os parâmetros) => {aqui vai o código da função}

import Navbar from "../subcomponents/Navbar";
import Background from "../subcomponents/Background";
import Sidebar from "../subcomponents/Sidebar";

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
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
        <ColumnWrapper>
            <Background setIsOpened={setIsOpened} show={isOpened} />
            <Navbar toggleMenu={setIsOpened} />
            <Sidebar show={isOpened} setIsOpened={setIsOpened} /> 
        </ColumnWrapper>
        </>
    );
}

export default Header; //<--- não precisa mas pode :) e ai vc exporta o componente pra chamar em outros lugares
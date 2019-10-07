import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ShopCartWrapper = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    font-family: 'Raleway', sans-serif;
`

const ButtonProduct = styled.button`
    width: 85%;
    height: 3em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: black;
      color: gray;
    };
`

const ShopCart = () =>{

    const [products, setProducts] = useState([]);

    const Thead = styled.thead`  
              
    `;

    const Th = styled.th`  
        text-align: center;     
    `;

    const Td = styled.td`
        
        text-align: center;
        padding: 15px;
    `;

    const [userRole, setUserRole] = useState("");
  
    const Table = styled.table`
        width: 80%;
        border: 1px solid #dddddd;
        padding: 10px;
    `;

    return(
        <ShopCartWrapper>
            <h1>CARRINHO</h1>
            <Table>
                <thead>
                    <Th>PRODUTO</Th>
                    <Th>PREÇO UNITÁRIO</Th>
                    <Th>QUANTIDADE</Th>
                    <Th>SUBTOTAL</Th>
                    <Th>EXCLUIR</Th>
                </thead>
                <tbody>
                <tr>
                        <Td>a</Td>
                        <Td>R$150,00</Td>
                        <Td>1</Td>
                        <Td>R$150,00</Td>
                        <Td><ButtonProduct></ButtonProduct></Td>
                    </tr>
                    <tr>
                        <Td>a</Td>
                        <Td>R$169,90</Td>
                        <Td>1</Td>
                        <Td>R$169,90</Td>
                        <Td><ButtonProduct></ButtonProduct></Td>
                    </tr>
                    <tr>
                        <Td>a</Td>
                        <Td>R$139,99</Td>
                        <Td>1</Td>
                        <Td>R$139,99</Td>
                        <Td><ButtonProduct></ButtonProduct></Td>
                    </tr>
                    <tr>
                        <Td>TOTAL: R$459,89</Td>
                    </tr>
                    <tr>
                        <button>CONTINUAR COMPRANDO</button>
                        <button>FINALIZAR COMPRA</button>
                    </tr>
                </tbody>
            </Table>
        </ShopCartWrapper>
    );
}

export default ShopCart
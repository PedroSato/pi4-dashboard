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

const ButtonDelete = styled.button`
    background: url("https://i.imgur.com/a59bh4H.png") no-repeat center;
    background-color: lightgray;
    width: 55%;
    height: 3em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: red;
      color: white;
    };
`

const ButtonContinued = styled.button`
    margin-left: 125px;
    width: 35%;
    height: 2em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: black;
      color: white;
    };
`

const ButtonFinished = styled.button`
    margin-left:10px;
    width: 30%;
    height: 2em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: green;
      color: white;
    };
`

const InputCounter = styled.input`
    height: 2em;
    width: 3em;
    font-size: 1em;
    text-align: center;
    border-radius: 0.25em;
    border: 1px solid gray;
    font-family: 'Raleway', sans-serif;
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const RowWrapper = styled.div`
    margin-left: 40em;
    width: 50%;
    display: flex;
    flex-direction: row;
    padding: 10px;
`

const ShopCart = () =>{

    const [products, setProducts] = useState([]);

    const Thead = styled.thead`  
              
    `;

    const Th = styled.th`  
             
    `;

    const Td = styled.td`
        margin-left: 10px;
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
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$150,00</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                <tr>
                    <Td>a</Td>
                    <Td>R$169,90</Td>
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$169,90</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                <tr>
                    <Td>a</Td>
                    <Td>R$139,99</Td>
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$139,99</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                <tr>
                    <Td>TOTAL: R$459,89</Td>
                </tr>
                </tbody>
            </Table>
            <RowWrapper>
                <ButtonContinued>CONTINUAR COMPRANDO</ButtonContinued>
                <ButtonFinished type="submit">FINALIZAR COMPRA</ButtonFinished>
            </RowWrapper>
        </ShopCartWrapper>
    );
}

export default ShopCart
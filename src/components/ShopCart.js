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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', sans-serif;
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

const RowWrapper = styled.div`

    margin-left: 39em;
    width: 50%;
    display: flex;
    flex-direction: row;
    padding: 10px;
`

const TotalPrice = styled.div`
    margin-left: 35em;
    font-size: 1.5em;
    font-weight: bold;
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
                    <Td><img style={{height: '5em'}} src="https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg"/> Jogo God of War</Td>
                    <Td>R$150,00</Td>
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$150,00</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                <tr>
                    <Td><img style={{height: '5em'}} src="https://http2.mlstatic.com/mario-kart-8-deluxe-em-portugus-nintendo-switch-lacrado-frete-gratis-D_NQ_NP_853052-MLB25555878987_052017-F.webp"/> Jogo Mario Kart Deluxe</Td>
                    <Td>R$169,90</Td>
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$169,90</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                <tr>
                    <Td><img style={{height: '5em'}} src="https://i.imgur.com/FvF0BDZ.png"/> Jogo GTA V</Td>
                    <Td>R$139,99</Td>
                    <Td>+ <InputCounter placeholder="1"/> -</Td>
                    <Td>R$139,99</Td>
                    <Td><ButtonDelete/></Td>
                </tr>
                
                </tbody>
            </Table>
            <Table>
                <tbody>
                    <tr>
                        <TotalPrice>TOTAL: R$459,89</TotalPrice>
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
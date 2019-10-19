import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 5em;
    text-align:center;
`;

const ProductTable = () => {
    const [products, setProducts] = useState([]);
   
    const H1 = styled.h1`
        margin-right: 25em;
        margin-bottom: 1.5em;
    `

    const Table = styled.table`
        margin-left: 12.25em;
        width:75%;
        border: 1px solid black;
    `;

    const Td = styled.td`
        border:1px solid black;        
    `;

    const [userRole, setUserRole] = useState("");   


    return (
        <Container>
            <H1>PRODUTOS</H1>
            <Table>
                <thead>
                    <th>Nome do Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr>
                                <Td>{product.nome}</Td>
                                <Td><span >- </span>{product.quantidade}<span> +</span></Td>
                                <Td>{product.precoUnit}</Td>
                                <Td>deletar/editar</Td>
                            </tr>
                        )
                    })}



                </tbody>
            </Table>
        </Container>
    );
}
export default ProductTable;
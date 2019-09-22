import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top:4em;
    text-align:center;
`;


const ProductTable = () => {
    const [products, setProducts] = useState([]);
   
  
    const Table = styled.table`
    width:100%;
    border: 1px solid black;
    `;

    const Td = styled.td`
        border:1px solid black;        
    `;

    const [userRole, setUserRole] = useState("");   


    return (
        <Container>
            <h1>PRODUTOS</h1>
            <Table>
                <thead>
                    <th>Nome Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr>
                                <Td>{product.nome}</Td>
                                <Td><span >- </span>{product.quantidade}<span> +</span></Td>
                                <Td>{product.precoUnit}</Td>
                                <Td>{product.categoria}</Td>
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
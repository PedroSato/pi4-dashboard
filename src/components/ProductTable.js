import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-top:4em;
    text-align:center;
`;


const ProductTable = () => {
    const [products, setProducts] = useState([{
        nome: "Produto",
        quantidade: 0,
        precoUnit: 0.0,
        categoria: "XBOX",
    },
    {
        nome: "Produto",
        quantidade: 0,
        precoUnit: 0.0,
        categoria: "XBOX",
    }, {
        nome: "Produto",
        quantidade: 0,
        precoUnit: 0.0,
        categoria: "XBOX",
    }, {
        nome: "Produto",
        quantidade: 0,
        precoUnit: 0.0,
        categoria: "XBOX",
    }]);

    const [userRole, setUserRole] = useState("");   


    return (
        <Container>
            <h1>PRODUTOS</h1>
            <table>
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
                                <td>{product.nome}</td>
                                <td><span >- </span>{product.quantidade}<span> +</span></td>
                                <td>{product.precoUnit}</td>
                                <td>{product.categoria}</td>
                                <td>deletar/editar</td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>
        </Container>
    );
}
export default ProductTable;
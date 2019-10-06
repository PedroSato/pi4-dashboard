import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import AddButton from '../subcomponents/AddButton'
import Magnifier from '../assets/search.png'
import InputForm from '../subcomponents/InputForm'
const SearchBarWrapper = styled.div`
    overflow: hidden;
  background-color: #e9e9e9;
  height:4em;
  width:80%;
  margin:0 auto;
  margin-top:5em;
  display:flex;
  align-items:center;

`

const CardWrapper = styled.div`
    margin-top:4em;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`

const Card = styled.div`
    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 20%;
  margin: auto;
  text-align: center;
  font-family: arial;  
  margin: 1em 1em;
  transition:.3s;
  cursor:pointer;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    max-width:22%;
  }
`
const Image = styled.img`
    width:80%;
    margin-top:1em;
    
`

const SearchButton = styled.button`
    border:0;
    color:white;
    background-color: #000;
    height:2em;
    border-radius:.5em;
    padding:.5em 3em;
    margin-left:2em;

    &:hover{
        color:black;
        background-color: #fff;
    }
`




const ProductList = () => {
    const [products, setProducts] = useState([{
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    }, {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    },
    {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    },
    {
        imagem: "https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg",
        titulo: "God Of War",
        preco: 150.99,
        descricao: "Kratos Fudendo tudo como sempre",
    },])

    return (
        <Fragment>

            <SearchBarWrapper>
                <img style={{height:'70%', margin:'.5em 1em', cursor:'pointer'}} src={Magnifier}/>
               
                <input type="text" placeholder="Pesquisar " style={{marginTop:'0',maxHeight:'3em', width:'80%',fontSize: '1em', borderRadius: '0.25em',border: '1px solid gray'}}></input>
                <SearchButton>OK</SearchButton>
                </SearchBarWrapper>
                
            <CardWrapper>
                {products.map(product => {
                    return (
                        <Card>
                            <Image src={product.imagem} alt="GodOfWar" />
                            <h1>{product.titulo}</h1>
                            <p>R${product.preco}</p>
                            <p>{product.descricao}</p>
                            <p><AddButton text="Adicionar ao Carrinho"></AddButton></p>
                        </Card>
                    )
                })}


                {/* <Image src="https://www.virginmegastore.ae/medias/sys_master/root/h8e/h36/9159138967582/God-of-War-378794-Detail.jpg" alt="GodOfWar"/>
            <h1>God Of War</h1>
            <p >R$150.99</p>
            <p>Kratos fudendo tudo... como sempre</p>
            <p><AddButton text="Adicionar ao Carrinho" /></p> */}
            </CardWrapper>
        </Fragment>
    )

}

export default ProductList
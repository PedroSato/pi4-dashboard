import React from 'react'
import styled from 'styled-components'


const NewProductWrapper = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputProduct = styled.input`
    margin-bottom: 2em;
    height: 2.5em;
    font-size: 1em;
    border-radius: 0.25em;
    border: 1px solid gray;
`

const LabelProduct = styled.span`
    font-size: 1.5em;
`

const InputWrapper = styled.div`
    width: 35%;
    display:flex;
    flex-direction:column;
`

const ColumnWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`

const ButtonProduct = styled.button`
    width: 25%;
    height: 3em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
`
const SelectProduct = styled.select`
    width: 20%;
    height: 3em;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 1em;
    margin-bottom: 2em;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`

const NewProducts = () => {

    return (
            
        <NewProductWrapper>
            <h1>CADASTRO DE PRODUTOS</h1>
            <ColumnWrapper>
                <InputWrapper>
                    <LabelProduct>Nome do Produto: </LabelProduct>
                    <InputProduct placeholder = "Escreva aqui..."/>
                </InputWrapper>

                <InputWrapper>
                    <LabelProduct>Descrição: </LabelProduct>
                    <InputProduct placeholder = "Escreva aqui..."/>
                </InputWrapper>

                <InputWrapper>
                    <LabelProduct>Preço: </LabelProduct>
                    <InputProduct placeholder = "Escreva aqui..."/>
                </InputWrapper>

                <InputWrapper>
                    <LabelProduct>Pergunta: </LabelProduct>
                    <InputProduct placeholder = "Escreva aqui..."/>
                </InputWrapper>

                <InputWrapper>
                    <LabelProduct>Resposta: </LabelProduct>
                    <InputProduct placeholder = "Escreva aqui..."/>
                </InputWrapper>
            </ColumnWrapper>

            <ColumnWrapper>
                <LabelProduct>Categoria: </LabelProduct>
                <SelectProduct>
                    <option value="" hidden>Selecionar...</option>
                    <option value="1">XBOX</option>
                    <option value="2">PS4</option>
                    <option value="3">NINTENDO SWITCH</option>
                    <option value="4">PC</option>
                </SelectProduct>
            </ColumnWrapper>

            <ColumnWrapper>
                <ButtonProduct>SALVAR</ButtonProduct>
            </ColumnWrapper>
        </NewProductWrapper>
        
    )

}
export default NewProducts;
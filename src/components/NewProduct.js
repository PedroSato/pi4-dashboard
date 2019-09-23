import React from 'react'
import styled from 'styled-components'

const NewProductWrapper = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputProduct = styled.input`
    
`

const LabelProduct = styled.span`
    
`

const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

const ColumnWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const NewProducts = () => {

    return (
        <NewProductWrapper>
            <ColumnWrapper>
                <h1>CADASTRO DE PRODUTOS</h1>
            </ColumnWrapper>
            
            <ColumnWrapper>
                <InputWrapper>
                    <LabelProduct>Nome do Produto: </LabelProduct>
                    <InputProduct/>
                </InputWrapper>
            </ColumnWrapper>
        </NewProductWrapper>
        
    )

}
export default NewProducts;
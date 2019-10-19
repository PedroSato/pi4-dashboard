import React from 'react'
import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format';
import Select from 'react-select';

const NewProductWrapper = styled.div`
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`

const InputProduct = styled.input`
    margin-bottom: 1.75em;
    height: 2.3em;
    font-size: 1em;
    border-radius: 0.25em;
    border: 1px solid gray;
    
`

const LabelProduct = styled.span`
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    
`

const InputWrapper = styled.div`
    width: 120%;
    display:flex;
    flex-direction: column;
`

const ColumnWrapper = styled.div`
    width: 45%;
    height:80%;
    display: flex;
    flex-direction: column;
    margin-right: 22em;
`

const RowWrapper = styled.div`
    width: 100%;
    height:80%;
    display: flex;
    flex-direction: row;
`



const ButtonSave = styled.button`
    width: 10%;
    height: 3em;
    margin-left: 30em;
    margin-top: 1.5em;
    font-size: 1em;
    border-radius: 0.25em;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: #0033FF;
      color: white;
    };
`

const ButtonCancel = styled.button`
    width: 10%;
    margin-left: 3em;
    margin-top: 1.5em;
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

const options = [
    { label: 'ADMINISTRADOR', value: 'ADMINISTRADOR' },
    { label: 'ESTOQUISTA', value: 'ESTOQUISTA' },
    { label: 'CLIENTE', value: 'CLIENTE' },
];

const NewProducts = () => {

  const customStyles = {
    
    control: (base) => ({
      ...base,
      borderColor: "gray",
    }),

  };

  const H1 = styled.h1`
    margin-right: 18em;
    margin-bottom: 1.5em;
  `

  return (

    <NewProductWrapper>
      <H1>CADASTRO DE USUÁRIOS</H1>
        <ColumnWrapper>
          <InputWrapper>
            <LabelProduct>Nome: </LabelProduct>
            <InputProduct placeholder="Escreva seu nome" />
          </InputWrapper>

          <InputWrapper>
            <LabelProduct>E-mail: </LabelProduct>
            <InputProduct placeholder="email@email.com" />
          </InputWrapper>

          <InputWrapper>
            <LabelProduct>Senha: </LabelProduct>
            <InputProduct type="password" placeholder="Escreva sua senha" />
          </InputWrapper>

            <RowWrapper>
                <InputWrapper>
                    <LabelProduct>CPF: </LabelProduct>
                    <InputProduct placeholder="XXX.XXX.XXX-XX" style={{ marginRight: 60 }}/>
                </InputWrapper>

                <InputWrapper>
                    <LabelProduct>Data de Nascimento: </LabelProduct>
                    <InputProduct type="date" style={{ marginRight: 60 }}/>
                </InputWrapper>
            </RowWrapper>

            <InputWrapper>
                    <LabelProduct>Cargo: </LabelProduct>
                    <Select styles={customStyles}
                    options={options} 
                    classNamePrefix="select"
                    closeMenuOnSelect={false}
                    placeholder="Selecionar..."
                    theme={theme => ({
                    ...theme,
                    borderRadius: "0.25em",
                    colors: {
                        ...theme.colors,
                        primary25: 'lightgray',
                        primary: 'gray',
                        neutral90: 'black'
                    }, })}
                    />
                </InputWrapper>

        </ColumnWrapper>
      <RowWrapper>
        <ButtonSave>SALVAR</ButtonSave><ButtonCancel>CANCELAR</ButtonCancel>
      </RowWrapper>
    </NewProductWrapper>
  )
}
export default NewProducts;
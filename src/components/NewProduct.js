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
    font-family: 'Raleway', sans-serif;
    
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
    padding-left: 10em;
`

const RowWrapper = styled.div`
    width: 45%;
    height:80%;
    display: flex;
    flex-direction: row;
`

const FormWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;
    
`

const ButtonProduct = styled.button`
    width: 15%;
    height: 3em;
    margin-top: 5em;
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

const FileLabel = styled.label`
    width: 45%;
    height: 2em;
    font-size: 0.8em;
    text-align: center;
    padding-top: 0.9em;
    margin-top: 1em;
    border-radius: 0.25em;
    border: none;
    background-color: lightgray;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: black;
      color: gray;
    };
`

const ProductImage = styled.img`
    width: 14em;
    height: 14em;
`
const ImageButton = styled.input`
    visibility: hidden;
`

const options = [
    { label: 'XBOX 360', value: 'XBOX 360' },
    { label: 'XBOX One', value: 'XBOX One' },
    { label: 'PlayStation 3', value: 'PlayStation 3' },
    { label: 'PlayStation 4', value: 'PlayStation 4' },
    { label: 'Nintendo Wii', value: 'Nintendo Wii' },
    { label: 'Nintendo Wii U', value: 'Nintendo Wii U' },
    { label: 'Nintendo 3DS', value: 'Nintendo 3DS' },
    { label: 'PC', value: 'PC' },
];

const NewProducts = () => {

  const customStyles = {
    
    control: (base) => ({
      ...base,
      borderColor: "gray",
    })
  };

  return (

    <NewProductWrapper>
      <h1>CADASTRO DE PRODUTOS</h1>
      <FormWrapper>
        <ColumnWrapper>
          <InputWrapper>
            <LabelProduct>Nome do Produto: </LabelProduct>
            <InputProduct placeholder="Escreva aqui..." />
          </InputWrapper>

          <InputWrapper>
            <LabelProduct>Descrição: </LabelProduct>
            <InputProduct placeholder="Escreva aqui..." />
          </InputWrapper>

          <RowWrapper>
            <InputWrapper>
              <LabelProduct style={{ alignSelf: "left" }}>Preço: </LabelProduct>
              <CurrencyFormat prefix="R$" placeholder="R$00.00" style={{ 
                marginBottom: "1.75em",
                height: "2.3em",
                fontSize: "1em",
                fontFamily: 'Raleway',
                borderRadius: "0.25em",
                marginRight: 60, 
                border: "1px solid gray" }}/>
            </InputWrapper>

            <InputWrapper>
              <LabelProduct>Quantidade: </LabelProduct>
              <InputProduct type="number" min="0" placeholder="0" style={{ marginRight: 60 }} />
            </InputWrapper>
          </RowWrapper>

          <InputWrapper>
            <LabelProduct>Plataforma: </LabelProduct>
            <Select styles={customStyles}
            options={options} 
            isMulti 
            className="basic-multi-select"
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

        <ColumnWrapper style={{alignItems: "center", paddingRight: 150}}>
          <ProductImage src="https://dummyimage.com/200x200/000/fff" />
          <FileLabel htmlFor="files">Carregar imagem</FileLabel>
          <ImageButton id="files" type="file" />

          {/*<InputWrapper>
            <LabelProduct>Gênero: </LabelProduct>
            <SelectProduct>
              <option value="" hidden>Selecionar...</option>
              <option value="0">AÇÃO</option>
              <option value="1">AVENTURA</option>
              <option value="2">LUTA</option>
              <option value="3">RPG</option>
              <option value="4">ESTRATÉGIA</option>
              <option value="5">CORRIDA</option>
              <option value="6">ESPORTE</option>
            </SelectProduct>
          </InputWrapper>*/}

        </ColumnWrapper>
      </FormWrapper>

      <ButtonProduct>SALVAR</ButtonProduct>

    </NewProductWrapper>

  )

}
export default NewProducts;

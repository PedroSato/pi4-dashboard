import React, { Fragment } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  position:relative;
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  transition:.3s;
  &:hover{
      background-color: green;
      color: black;
    };
  `

const AddButton = ({ text }) => {
    return (
        <Fragment>
            <Button>{text}</Button>
        </Fragment>)
}

export default AddButton

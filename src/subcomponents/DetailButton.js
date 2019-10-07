import React, { Fragment } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  position:static;
  border: none;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  transition:.3s;
  &:hover{
      background-color: lightgray;
      color: black;
    };
  `

const DetailButton = ({ text }) => {
    return (
        <Fragment>
            <Button>{text}</Button>
        </Fragment>)
}

export default DetailButton
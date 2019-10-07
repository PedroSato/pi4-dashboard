import React, { Fragment } from 'react'
import styled from 'styled-components'


const InputForm = ({placeholder}) => {
    
    const Input = styled.input`
    font-family: 'Raleway', sans-serif;
    width: 80%;
    height: 2.3em;
    font-size: 1em;
    border-radius: 0.25em;
    border: 1px solid gray;
`
    return(
        <Fragment>          
            <Input placeholder={placeholder}></Input>
        </Fragment>
    )
}

export default InputForm;
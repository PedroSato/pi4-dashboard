import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductTable from './components/ProductTable'
import NewProducts from "./components/NewProduct"
function Routes() {
    return (
        <Switch>

            <Route path="/produtos" exact component={ProductTable} />
            <Route path="/produtos/cadastro" exact component={NewProducts}/>
  
        </Switch>
    )
}

export default Routes
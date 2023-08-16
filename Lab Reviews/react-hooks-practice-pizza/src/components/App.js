import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const baseUrl = 'http://localhost:3001'
const pizzasUrl = baseUrl + '/pizzas'

function App() {

  const [ pizzas, setPizzas ] = useState( [] )
  const [ pizzaToEdit, setPizzaToEdit ] = useState( null )

  const fetchPizzas = () => {
    fetch( pizzasUrl )
    .then( r => r.json() )
    .then( setPizzas )
  }

  useEffect( fetchPizzas, [] )

  const changePizzaToEdit = ( pizza ) => {
    setPizzaToEdit( pizza )
  }

  const updatePizzaInfo = ( event, editedPizza ) => {
    event.preventDefault()

    if ( pizzaToEdit ) {
      editedPizza.id = pizzaToEdit.id

      const patchRequest = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify( editedPizza )
      }

      fetch( pizzasUrl + '/' + editedPizza.id, patchRequest )
      .then( r => r.json() )
      .then( updatedPizzaData => {
        const updatePizzaList = pizzas.map( pizza => pizza.id === updatedPizzaData.id ? updatedPizzaData : pizza )
        setPizzas( updatePizzaList )
      })
    }
  }

  return (
    <>
      <Header />
      <PizzaForm
        pizzaToEdit = { pizzaToEdit }
        updatePizzaInfo = { updatePizzaInfo }
      />
      <PizzaList
        pizzas = { pizzas }
        changePizzaToEdit = { changePizzaToEdit }
      />
    </>
  );
}

export default App;

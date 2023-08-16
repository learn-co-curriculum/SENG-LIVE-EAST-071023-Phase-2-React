import React, { useState, useEffect } from "react";

function PizzaForm({ pizzaToEdit, updatePizzaInfo }) {

  const [ formToppings, setFormToppings ] = useState( '' )
  const [ formSize, setFormSize ] = useState( 'Small' )
  const [ formVeggie, SetFormVeggie ] = useState( 'Not Vegetarian' )

  useEffect( () => {
    if ( pizzaToEdit ) {
      setFormToppings( pizzaToEdit.topping )
      setFormSize( pizzaToEdit.size )
      SetFormVeggie( pizzaToEdit.vegetarian ? 'Vegetarian' : 'Not Vegetarian' )
    }
  }, [ pizzaToEdit ] )

  const changeFormToppings = ( event ) => setFormToppings( event.target.value )

  const changeFormSize = ( event ) => setFormSize( event.target.value )

  const changeFormVeggie = ( event ) => {
    const value = event.target.value
    SetFormVeggie( value )
  }

  const editedPizza = {
    topping: formToppings,
    size: formSize,
    vegetarian: formVeggie === "Vegetarian" ? true : false
  }

  return (
    <form onSubmit={ ( event ) => updatePizzaInfo( event, editedPizza ) /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange = { changeFormToppings }
            value = { formToppings }
          />
        </div>
        <div className="col">
          <select
            className="form-control" 
            name="size"
            onChange = { changeFormSize }
            value = { formSize }
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = { formVeggie === 'Vegetarian' }
              onChange = { changeFormVeggie }
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange = { changeFormVeggie }
              checked = { formVeggie === 'Not Vegetarian' }
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

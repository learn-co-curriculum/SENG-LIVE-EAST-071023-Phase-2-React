import React from "react";

function PlantCard({ plant: { name, id, price, image, inStock }, markOutOfStock, outOfStock }) {

  // const { name, id, price, image } = plant
  // console.log( id, name, price, image )

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      { !outOfStock.includes( id ) ? (
        <button className="primary"
          onClick = { () => markOutOfStock( id ) }
        >In Stock</button>
      ) : (
        <button
          // onClick = { changeStock }
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

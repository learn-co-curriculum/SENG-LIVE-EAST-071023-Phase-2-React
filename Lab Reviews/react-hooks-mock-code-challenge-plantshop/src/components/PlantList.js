import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markOutOfStock, outOfStock }) {

  // console.log( props )
  // const { plants } = props
  // const plants = props.plants

  const renderPlantCards = plants.map( plant =>
      <PlantCard
        key = { plant.id }
        plant = { plant }
        markOutOfStock = { markOutOfStock }
        outOfStock = { outOfStock }
        // {...plant }
        // name = { plant.name }
        // id = { plant.id }
        // price = { plant.price }
        // image = { plant.image }
      />
    )

  // console.log( renderPlantCards )

  return (
    <ul className="cards">
      {
      /* render PlantCards components in here */
        renderPlantCards
      }
    </ul>
  );
}

export default PlantList;

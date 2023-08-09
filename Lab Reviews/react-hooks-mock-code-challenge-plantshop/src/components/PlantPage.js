import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = 'http://localhost:6001'
const plantsUrl = baseUrl + '/plants'

function PlantPage() {

  const [ plants, setPlants ] = useState( [] )
  const [ searchPlants, setSearchPlants ] = useState( '' )
  const [ outOfStock, setOutOfStock ] = useState( [] )

  const fetchPlants = () =>
    fetch( plantsUrl )
    .then( r => r.json() )
    .then( setPlants )
    // .then( plantsData => setPlants( plantsData ) )

  useEffect( () => fetchPlants(), [] )

  const createNewPlant = ( event, newPlant ) => {
    event.preventDefault()
    newPlant.price = parseInt( newPlant.price )
    // console.log( newPlant )

    const postRequest = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify( newPlant )
    }

    fetch( plantsUrl, postRequest )
    .then( r => r.json() )
    .then( newPlantData => setPlants( [...plants, newPlantData ] ) )

  }

  const changeSearchPlants = ( searchTerm ) => setSearchPlants( searchTerm )

  const filteredPlants = plants.filter( plant => plant.name.toLowerCase().includes( searchPlants.toLowerCase() ) )
  // console.log( filteredPlants )

  const markOutOfStock = ( plantId ) => {
    // console.log( plantId )
    setOutOfStock( [...outOfStock, plantId ] )
  }


  return (
    <main>
      <NewPlantForm
        createNewPlant = { createNewPlant }
      />
      <Search
        changeSearchPlants = { changeSearchPlants }
      />
      <PlantList 
        markOutOfStock = { markOutOfStock }
        outOfStock = { outOfStock }
        plants = { filteredPlants }
      />
    </main>
  );
}

export default PlantPage;

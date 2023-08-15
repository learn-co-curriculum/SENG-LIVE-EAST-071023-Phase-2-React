import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [ sushis, setSushis ] = useState( [] )
  const [ index, setIndex ] = useState( 0 )
  const [ eatenSushis, setEatenSushis ] = useState( [] )
  const [ wallet, setWallet ] = useState( 200 )

  useEffect( () => fetchSushis(), [] )

  const fetchSushis = () => {
    fetch( API )
    .then( r => r.json() )
    .then( setSushis )
  }

  const fourSushi = sushis.slice( index, index + 4 )

  const moreSushi = ( ) => {
    setIndex( index + 4 )
  if ( index >= 96 )
    setIndex( 0 )
  }

  const eatSushi = ( sushi ) => {
    if ( !eatenSushis.includes( sushi.id ) && wallet >= sushi.price ) {
      setWallet( wallet - sushi.price )
      setEatenSushis( [...eatenSushis, sushi.id ] )
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushis = { fourSushi }
        moreSushi = { moreSushi }
        eatSushi = { eatSushi }
        eatenSushis = { eatenSushis }
      />
      <Table
        plates = { eatenSushis }
        wallet = { wallet }
      />
    </div>
  );
}

export default App;

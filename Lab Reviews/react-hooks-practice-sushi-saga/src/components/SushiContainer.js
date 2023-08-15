import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {

  const { sushis, moreSushi, eatSushi, eatenSushis } = props
  
  const renderSushis = sushis.map( sushi =>
    <Sushi
      key = { sushi.id }
      sushi = { sushi }
      eatSushi = { eatSushi }
      eatenSushis = { eatenSushis }
    />
  )

  return (
    <div className="belt">
      {/* Render Sushi components here! */
        renderSushis
      }
      <MoreButton
        moreSushi = { moreSushi }
      />
    </div>
  );
}

export default SushiContainer;

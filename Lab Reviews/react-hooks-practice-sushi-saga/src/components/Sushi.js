import React from "react";

function Sushi(props) {

  const { sushi, eatSushi, eatenSushis } = props

  const { name, id, img_url, price } = sushi

  // const { name, id, img_url, price } = props.sushi
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ () => eatSushi( sushi ) }>
        {/* Tell me if this sushi has been eaten! */}
        { eatenSushis.includes( id ) ? null : (
          <img
            src={/* Give me an image source! */ img_url}
            alt={/* Give me a name! */ name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */ name} - ${/* Give me a price! */ price}
      </h4>
    </div>
  );
}

export default Sushi;

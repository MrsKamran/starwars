import React from "react";

const ShipCard = (props) => (
  <>
    <h2>NAME: {props.ship.name}</h2>
    <h2>MODEL: {props.ship.model}</h2>
  </>
);

export default ShipCard;

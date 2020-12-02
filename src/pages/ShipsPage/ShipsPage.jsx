import React from "react";
import { Link } from "react-router-dom";

const ShipsPage = (props) => {
  const shipsArray = props.ships;
  return (
    <div className="ship-cards">
      {props.ships.length === 0 ? (
        <h3>Loading Ships...</h3>
      ) : (
        <div>
          {shipsArray.map((ship, idx) => (
            <div className="ship-card">
              <Link to={`/ships/${idx}`} className="rmv-underline">
                <h3>{ship.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* <ShipCard name={props.ships[0].name} /> */}
    </div>
  );
};

export default ShipsPage;

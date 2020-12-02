import React from "react";
import { Link } from "react-router-dom";
import ShipCard from "../../components/ShipCard/ShipCard";

const ShipPage = (props) => {
  return (
    <div className="ship-card">
      <ShipCard ship={props.ship} />
      <Link to="/" className="rmv-underline">
        Return
      </Link>
    </div>
  );
};

export default ShipPage;

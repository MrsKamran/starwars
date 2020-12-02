import "./App.css";
import React, { Component } from "react";
import ShipsPage from "../../pages/ShipsPage/ShipsPage";
import ShipPage from "../../pages/ShipPage/ShipPage";
import { getAllStarships } from "../../services/sw-api";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: [],
    };
  }

  async componentDidMount() {
    const ships = await getAllStarships();
    console.log(ships);
    this.setState({ ships: ships.results });
  }

  render() {
    return (
      <div className="App">
        <h1> Star Wars Starships</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ShipsPage ships={this.state.ships} />}
          />
          <Route
            exact
            path="/ships/:id"
            render={(props) => (
              <ShipPage
                {...props}
                ship={this.state.ships[props.match.params.id]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

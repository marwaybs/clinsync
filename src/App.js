import React from "react";
import Dashboard from "./components/dashBoard";
import { Switch, Route, Router } from "./utils/router";


function App(props) {
  return (
      <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>
      </Router>
  );
}

export default App;

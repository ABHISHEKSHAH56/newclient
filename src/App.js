import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import ComponentRenderer from "ComponentRenderer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantLandingPage from "demos/RestaurantLandingPage";

export default function App() {
  
  return (
    <Router>
      <Switch>        
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>       
        <Route path="/">
          <RestaurantLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

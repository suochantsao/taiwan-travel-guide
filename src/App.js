// react-router-dom
import { Route, Switch } from "react-router-dom";

// Pages
import Index from "@/pages/index.js";
import Attraction from "@/pages/attraction.js";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/attractions">
        <Attraction />
      </Route>
    </Switch>
  );
}

export default App;

// react-router-dom
import { Route } from "react-router-dom";

// Pages
import Index from "./pages/index.js";
import Attraction from "./pages/attraction.js";

// Components
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/attractions">
        <Attraction />
      </Route>
    </Layout>
  );
}

export default App;

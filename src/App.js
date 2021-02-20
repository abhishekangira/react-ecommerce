import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage";
import HatsPage from "./pages/hats";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/hats">
        <HatsPage />
      </Route>
    </Switch>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/collections">
        <CollectionsPage />
      </Route>
    </Switch>
  );
}

export default App;

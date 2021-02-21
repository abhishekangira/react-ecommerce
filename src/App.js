import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/collections">
            <CollectionsPage />
        </Route>
      </Switch>
    </>
  );
}

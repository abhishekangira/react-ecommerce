import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";

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
        <Route path="/loginregister">
            <LoginRegisterPage />
        </Route>
      </Switch>
    </>
  );
}

import {useState} from 'react'
import { Route, Switch } from "react-router-dom";
import auth from "./auth";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";


export default function App() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser())
  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/collections">
            <CollectionsPage />
        </Route>
        <Route path="/loginregister">
            <LoginRegisterPage setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </>
  );
}

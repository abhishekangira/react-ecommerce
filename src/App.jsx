import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { auth, createUserDocument } from "./firebase/utils";
import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  state = {
    currentUser: "not set",
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
      if (this.props.location.pathname === "/signin") this.props.history.push("/");
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    let displayName;
    if (this.state.currentUser !== "not set" && this.state.currentUser !== null)
      displayName = this.state.currentUser.displayName;
    else if (this.state.currentUser === "not set") displayName = "not set";

    return (
      <div>
        <Header displayName={displayName} />
        <div className="page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

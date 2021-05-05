import React from "react";
import { connect } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserDocument } from "./firebase/utils";

import "./App.scss";

import HomePage from "./pages/home/home.page";
import ShopPage from "./pages/shop/shop.page";
import CategoryPage from "./pages/collection/collection.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.page";

import Header from "./components/header/header.component";
import Loader from "./components/loader/loader.component";

import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  handleClick = () => {
    window.top.postMessage("ecom", "*");
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;

    window.addEventListener("click", this.handleClick);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    window.removeEventListener("click", this.handleClick);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/:category" component={CategoryPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/signin">
              {this.props.currentUser === "" ? (
                <div className="loader">
                  <Loader primary="black" />
                </div>
              ) : this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

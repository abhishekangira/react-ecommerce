import React from "react";
import { auth, signInWithGoogle } from "../../firebase/utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    loading1: false,
    loading2: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading1: true });
    try {
      await auth.signInWithEmailAndPassword(email, password); // returns {user}
    } catch (error) {
      console.error(error);
      this.setState({ loading1: false });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Glad to have you back buddy!</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons-sign-in">
            <CustomButton type="submit" loading={this.state.loading1.toString()}>
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              google="true"
              loading={this.state.loading2.toString()}
              onClick={() => {
                this.setState({ loading2: true });
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

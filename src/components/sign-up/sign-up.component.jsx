import React from "react";
import { auth, createUserDocument } from "../../firebase/utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false,
    passwordMismatch: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ passwordMismatch: true });
      setTimeout(() => {
        this.setState({ passwordMismatch: false });
      }, 2000);
      return;
    }
    this.setState({ loading: true });
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user, { displayName });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>No worries, just register now or use sign in with google!</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Full Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="buttons-sign-up">
            <CustomButton type="submit" loading={this.state.loading.toString()}>
              {this.state.passwordMismatch ? "passwords mismatch" : "Sign Up"}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

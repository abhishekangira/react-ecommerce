import { useState } from "react";
import styled from "styled-components";
import auth from "../auth";

import FormInput from "./FormInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: normal;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 27rem;
  justify-content: space-around;
  margin: 2rem 0;
  width: 65%;

  button {
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    border: none;
    color: #fff;
    background-color: black;
    font-size: 1rem;
    cursor: pointer;
  }
`;


export default function Register({setCurrentUser}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let registerResponse = await auth.signup(email, password, { full_name: name });
      console.log("Confirmation email sent", registerResponse);
      let loginResponse = await auth.login(email, password, true);
      setCurrentUser(auth.currentUser())
      console.log("Logged In", loginResponse);
    } catch (e) {
      console.error(e);
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target }, setter) => {
    setter(target.value);
  };

  return (
    <Wrapper>
      <h2>I have an existing account</h2>
      <h3>Sign in with your email and password</h3>
      <Form onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          label="Name"
          value={name}
          onChange={(e) => handleChange(e, setName)}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => handleChange(e, setConfirmPassword)}
          required
        />
        <button type="submit">Sign Up</button>
      </Form>
    </Wrapper>
  );
}

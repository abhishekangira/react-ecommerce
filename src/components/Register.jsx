import { useState } from "react";
import styled from "styled-components";
import GoTrue from "gotrue-js";

import FormInput from "./FormInput";

const auth = new GoTrue({
  APIUrl: "https://soulstore.netlify.app/.netlify/identity",
  setCookie: false,
});

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

console.log(auth.currentUser()?.email);

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let registerResponse = await auth.signup(email, password);
      console.log("Confirmation email sent", registerResponse);
      let loginResponse = await auth.login(email, password, true);
      console.log("Logged In", loginResponse);
      auth.currentUser().update({ name });
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
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => handleChange(e, setConfirmPassword)}
        />
        <button type="submit">Sign Up</button>
      </Form>
    </Wrapper>
  );
}

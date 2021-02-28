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
  height: 16rem;
  justify-content: space-around;
  margin: 2rem 0;
  width: 65%;

  div {
    display: flex;
    justify-content: space-between;

    button {
      padding: 0.8rem 2rem;
      text-transform: uppercase;
      border: none;
      color: #fff;
      background-color: #6d6de7;
      font-size: 1rem;
      cursor: pointer;
    }
    button:first-child {
      background-color: black;
    }
  }
`;

export default function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let loginResponse = await auth.login(email, password, true);
      setCurrentUser(auth.currentUser());
      console.log("Logged In", loginResponse);
    } catch (e) {
      console.error(e);
    }

    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target }, setter) => {
    setter(target.value);
  };

  const handleExternalLogin = (e) => {
    e.preventDefault();
    const url = auth.loginExternalUrl("google");
    window.location.href = url;
  };

  return (
    <Wrapper>
      <h2>I have an existing account</h2>
      <h3>Sign in with your email and password</h3>
      <Form onSubmit={handleSubmit}>
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
        <div>
          <button type="submit">Sign In</button>
          <button onClick={handleExternalLogin}>Sign In with google</button>
        </div>
      </Form>
    </Wrapper>
  );
}

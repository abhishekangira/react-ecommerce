import { useState, useRef } from "react";

import styled from "styled-components";

import FormInput from "./FormInput";
import useLogin from "../hooks/useLogin";
import Button from "./Button";

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
`;

export default function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin(email, password, setCurrentUser);
  const [loading, setLoading] = useState("false");
  const buttonRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading("true");
    login();
  };

  const handleChange = ({ target }, setter) => {
    setter(target.value);
  };

  // const handleExternalLogin = (e) => {
  //   e.preventDefault();
  //   const url = auth.loginExternalUrl("google");
  //   window.location.href = url;
  // };

  return (
    <Wrapper>
      <h2>I have an existing account</h2>
      <h3>Sign in with your email and password</h3>
      <Form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            buttonRef.current.click();
          }
        }}
        onSubmit={handleSubmit}
      >
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
        <Button ref={buttonRef} loading={loading} type="submit">
          Sign In
        </Button>
        {/* <button onClick={handleExternalLogin}>Sign In with google</button> */}
      </Form>
    </Wrapper>
  );
}

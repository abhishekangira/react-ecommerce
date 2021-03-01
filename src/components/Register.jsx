import { useState, useRef } from "react";
import styled from "styled-components";
import auth from "../auth";
import useLogin from "../hooks/useLogin";
import Button from "./Button";

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

export default function Register({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("false");

  const login = useLogin(email, password, setCurrentUser);
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setLoading("true");

      try {
        let registerResponse = await auth.signup(email, password, { full_name: name });
        console.log("Confirmation email sent", registerResponse);
      } catch (e) {
        console.error(e);
      }

      login();
    } else {
      ref.current.innerText = "Passwords Mismatch";
      setTimeout(() => ref.current.innerText = "Sign Up", 2000)
    }
  };

  const handleChange = ({ target }, setter) => {
    setter(target.value);
  };

  return (
    <Wrapper>
      <h2>I have an existing account</h2>
      <h3>Sign in with your email and password</h3>
      <Form
        onKeyDown={(e) => (e.key === "Enter" ? ref.current.click() : null)}
        onSubmit={(e) => handleSubmit(e, ref)}
      >
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
        <Button ref={ref} loading={loading} type="submit">
          Sign In
        </Button>
      </Form>
    </Wrapper>
  );
}

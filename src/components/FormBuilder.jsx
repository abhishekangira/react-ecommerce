import { useState, useRef } from "react";
import styled from "styled-components";
import auth from "../auth";
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
  justify-content: space-around;
  margin: 2rem 0;
  width: 65%;
  input {
    margin-bottom: 2.5rem;
  }
  button {
    margin-bottom: 1.5rem;
  }
`;

export default function FormBuilder(props) {
  const [loading, setLoading] = useState("false");
  const buttonRef = useRef();
  const { name, email, password, confirmPassword } = props.inputs;
  const login = useLogin(email.value, password.value, props.setCurrentUser);

  const loginSubmit = async (e) => {
    e.preventDefault();
    buttonRef.current.disabled = true;
    setLoading("true");
    const response = await login(() => setLoading("false"));
    if (typeof response === "string") {
      buttonRef.current.innerText = response;
      setTimeout(() => {
        buttonRef.current.innerText = "Sign In";
        buttonRef.current.disabled = false;
      }, 2000);
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (password.value === confirmPassword.value) {
      setLoading("true");

      try {
        let registerResponse = await auth.signup(email.value, password.value, {
          full_name: name.value,
        });
        console.log("Confirmation email sent", registerResponse);
      } catch (e) {
        console.error(e);
      }

      login();
    } else {
      buttonRef.current.innerText = "Passwords Mismatch";
      setTimeout(() => (buttonRef.current.innerText = "Sign Up"), 2000);
    }
  };

  const handleChange = ({ target }, setter) => {
    setter(target.value);
  };

  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <Form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            buttonRef.current.click();
          }
        }}
        onSubmit={props.type === "login" ? loginSubmit : registerSubmit}
      >
        {props.inputs &&
          Object.values(props.inputs).map((input) => (
            <FormInput
              name={input.name}
              type={input.type}
              label={input.label}
              value={input.value}
              onChange={(e) => handleChange(e, input.setter)}
              required={input.required}
            />
          ))}
        {props.buttons &&
          props.buttons.map((button) => (
            <Button ref={buttonRef} loading={loading} type="submit">
              {button}
            </Button>
          ))}
      </Form>
    </Wrapper>
  );
}

import { useState, useRef } from "react";
import FormBuilder from "./FormBuilder";

export default function Login({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const props = {
    type: "register", // login or register
    title: "I don't have an existing account",
    subtitle: "Sign up now, you wont regret it",
    setCurrentUser: setCurrentUser,
    inputs: {
      name: {
        name: "name",
        type: "text",
        label: "Name",
        value: name,
        setter: setName,
        required: true,
      },
      email: {
        name: "email",
        type: "email",
        label: "Email",
        value: email,
        setter: setEmail,
        required: true,
      },
      password: {
        name: "password",
        type: "password",
        label: "Password",
        value: password,
        setter: setPassword,
        required: true,
      },
      confirmPassword: {
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        value: confirmPassword,
        setter: setConfirmPassword,
        required: true,
      },
    },
    buttons: ["Sign Up"],
  };

  return <FormBuilder {...props} />;
}

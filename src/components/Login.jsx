import { useState } from "react";
import FormBuilder from "./FormBuilder";

export default function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const props = {
    type: "login", // login or register
    title: "I have an existing account",
    subtitle: "Welcome back buddy boy",
    setCurrentUser,
    inputs: {
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
    },
    buttons: ["Sign In"],
  };

  return <FormBuilder {...props} />;
}

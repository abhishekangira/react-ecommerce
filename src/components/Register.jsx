import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: normal;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  justify-content: space-around;
  margin: 2rem 0;
  width: 65%;
  input {
    height: 3rem;
    border: none;
    border-bottom: 2px solid #cecece;
    outline: none;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
    /* margin-bottom: 1rem; */
  }

  button {
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    border: none;
    color: #fff;
    background-color: #000;
    font-size: 1rem;
    width: 45%;
    cursor: pointer;
  }
`;

export default function Register() {
  return (
    <Wrapper>
      <h2>I don't have an existing account</h2>
      <h3>Register with your email and password</h3>
      <Form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Sign Up</button>
      </Form>
    </Wrapper>
  );
}

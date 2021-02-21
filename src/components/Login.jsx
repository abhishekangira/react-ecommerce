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
  min-height: 16rem;
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
  div {
      display: flex;
      justify-content: space-between;
      /* margin-top: 1rem; */
      
     button {
        padding: .8rem 2rem;
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

export default function Login() {
  return (
    <Wrapper>
      <h2>I have an existing account</h2>
      <h3>Sign in with your email and password</h3>
      <Form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <div>
              <button>Sign In</button>
              <button>Sign In with google</button>
          </div>
      </Form>
    </Wrapper>
  );
}

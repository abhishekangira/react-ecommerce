import styled from "styled-components";

import Login from "../components/Login";
import Register from "../components/Register";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 3rem;
  & > div {
    min-width: 50%;
  }
`;

export default function LoginRegisterPage() {
  return (
    <Wrapper className="fade">
      <Login />
      <Register />
    </Wrapper>
  );
}

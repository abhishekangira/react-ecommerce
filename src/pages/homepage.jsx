import styled from "styled-components";
import MenuItem from "../components/menu-item"
import Directory from "../components/directory"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export default function HomePage(props) {
  console.log(props)
  return (
    <Wrapper>
      <h1>Cool Shop</h1>
      <Directory />
    </Wrapper>
  );
}

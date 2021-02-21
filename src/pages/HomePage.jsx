import styled from "styled-components";
import CollectionCardList from "../components/CollectionCardList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
  & h1 {
    text-align: center;
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <h1>The Soul Store</h1>
      <CollectionCardList />
    </Wrapper>
  );
}

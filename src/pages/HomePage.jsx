import styled from "styled-components";
import CollectionCardList from "../components/CollectionCardList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <h1>The React Store</h1>
      <CollectionCardList />
    </Wrapper>
  );
}

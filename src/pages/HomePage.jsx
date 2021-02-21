import styled from "styled-components";
import CollectionList from "../components/CollectionList";

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
    <Wrapper className="fade">
      <CollectionList />
    </Wrapper>
  );
}

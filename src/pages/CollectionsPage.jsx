import styled from "styled-components";
import CollectionPreview from "../components/CollectionPreview";

import CollectionsArray from "../data/items-data";

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
      <h1>All Collections</h1>
      {CollectionsArray.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </Wrapper>
  );
}
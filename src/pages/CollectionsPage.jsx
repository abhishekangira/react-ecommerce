import styled from "styled-components";
import ProductList from "../components/ProductList";

import CollectionsArray from "../data/products-data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 80px;
`;

export default function CollectionsPage() {
  return (
    <Wrapper className="fade">
      {CollectionsArray.map(({ id, ...otherProps }) => (
        <ProductList key={id} {...otherProps} />
      ))}
    </Wrapper>
  );
}

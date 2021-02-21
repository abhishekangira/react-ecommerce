import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export default function CollectionPreview({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <Wrapper>
        {items.map(
          ({ id, ...otherProps }, index) => index < 4 && <ProductCard key={id} {...otherProps} />
        )}
      </Wrapper>
    </>
  );
}

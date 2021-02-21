import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 10px 0 20px;
`;

export default function ProductList({ title, items }) {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        {items.map(
          ({ id, ...otherProps }, index) => index < 4 && <ProductCard key={id} {...otherProps} />
        )}
      </Wrapper>
    </>
  );
}

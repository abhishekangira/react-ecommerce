import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Image = styled.img`
  max-height: 95%;
`;

const Details = styled.div`
  display: flex;
  height: 5%;
  justify-content: space-between;
`;

export default function ProductCard({ name, price, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <Details>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </Details>
    </Wrapper>
  );
}

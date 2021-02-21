import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  flex: 1 1 auto;
  min-width: 20%;
`;

const Image = styled.img`
  height: 85%;
`;

const Details = styled.div`
  display: flex;
  height: 15%;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export default function ProductCard({ name, price, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <Details>
        <p>{name}</p>
        <p>${price}</p>
      </Details>
    </Wrapper>
  );
}

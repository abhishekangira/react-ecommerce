import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  height: 240px;
  ${(props) =>
    props.size === "large" &&
    css`
      height: 380px;
    `}
  ${(props) =>
    props.size === "xlarge" &&
    css`
      min-width: 60vw;
    `}
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
    background-size: cover;
    transition: all 3s ease;
  }
  &:hover:before {
    transform: scale(1.1);
  }
  &:hover {
    cursor: pointer;
    & div {
      opacity: 0.8;
    }
  }
`;

const Content = styled.div`
  background-color: white;
  opacity: 0.7;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;

export default function CollectionCard({ title, imageUrl, size }) {
  return (
    <Wrapper backgroundImage={imageUrl} size={size}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </Wrapper>
  );
}

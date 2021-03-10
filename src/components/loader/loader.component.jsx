import styled, { keyframes, css } from "styled-components";

const COLORS = {
  primary: "white",
  secondary: "#ec008c",
  tertiary: "#00b6ed",
};

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%)
`;
const BounceDelay = keyframes`
  0%,
  80%,
  100% {
      transform: scale(0)
  }
  40% {
      transform: scale(.8)
  }
`;
const Spinner = styled.div`
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${COLORS.primary};
    ${(props) =>
      props.primary &&
      css`
        background-color: ${props.primary};
      `}
    border-radius: 100%;
    animation: ${BounceDelay} 1.2s infinite ease-in-out both;
  }

  span:nth-child(1) {
    animation-delay: -0.32s;
    -webkit-animation-delay: -0.32s;
  }

  span:nth-child(2) {
    background-color: ${COLORS.secondary};
    ${(props) =>
      props.secondary &&
      css`
        background-color: ${props.secondary};
      `}
    animation-delay: -0.16s;
  }

  span:nth-child(3) {
    background-color: ${COLORS.tertiary};
    ${(props) =>
      props.tertiary &&
      css`
        background-color: ${props.tertiary};
      `}
  }
`;

const Loader = (props) => {
  return (
    <SpinnerWrapper>
      <Spinner {...props}>
        <span />
        <span />
        <span />
      </Spinner>
      {props.children}
    </SpinnerWrapper>
  );
};

export default Loader;

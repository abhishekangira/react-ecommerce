import styled, { keyframes } from "styled-components";

const COLORS = {
  primary: "#0d6efd",
  secondary: "#c94487",
};

const wave = (props) => keyframes`
  0%, 40%, 100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(0, -15px);
  }
`;

const waveColors = (props) => keyframes`
  0%, 40%, 100% {
    background-color: ${props.primaryColor}
  }
  10% {
    background-color: ${props.secondaryColor}
  }
`;

const Dot = styled.span`
  display: inline-block;
  margin: 1px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.primaryColor};
  animation: ${wave} 2s ease infinite, ${waveColors} 2s ease infinite;
  animation-delay: ${(props) => `${100 * props.index}ms`};
`;

const MiddleFinger = styled.span`
  display: inline-block;
  animation: ${wave} 2s ease infinite;
  animation-delay: ${(props) => `${100 * props.index}ms`};
  &::before {
    content: "🖕";
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const LoadingWave = (props) => {
  const Item = props.angry ? MiddleFinger : Dot;
  return (
    <Wrapper>
      {[...Array(8).keys()].map((x, index) => (
        <Item {...props} key={index} index={index} />
      ))}
    </Wrapper>
  );
};

LoadingWave.defaultProps = {
  primaryColor: COLORS.primary,
  secondaryColor: COLORS.secondary,
  angry: false,
};

export default LoadingWave;

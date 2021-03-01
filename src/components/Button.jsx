import { forwardRef } from "react";
import styled from "styled-components";
// import LoadingWave from "@bit/ngoue.playground.loading-wave";
import LoadingWave from "./LoadingWave";

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  border: none;
  color: #fff;
  background-color: black;
  font-size: 1rem;
  cursor: pointer;
  height: 3.5rem;
  transition: background-color .3s ease;
  &:hover {
    color: #000;
    background-color: white;
    border: 3px solid black;
  }
`;

export default forwardRef(({ children, loading, ...otherProps }, ref) => {
  return (
    <StyledButton ref={ref} {...otherProps}>
      {loading === "false" ? children : <LoadingWave />}
    </StyledButton>
  );
});

import { forwardRef } from "react";
import styled, { css } from "styled-components";
import LoadingWave from "@bit/ngoue.playground.loading-wave";

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  border: none;
  color: #fff;
  background-color: black;
  font-size: 1rem;
  cursor: pointer;
  height: 3.5rem;
`;

export default forwardRef(({ children, loading, ...otherProps }, ref) => {
  return (
    <StyledButton ref={ref} {...otherProps}>
      {loading === "false" ? children : <LoadingWave />}
    </StyledButton>
  );
});

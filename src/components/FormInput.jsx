import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    margin-top: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
    width: 10%;
    font-weight: bold;
    color: #8b8b8b;
    position: absolute;
    transition: all 0.3s ease;
    ${({ value }) =>
      value &&
      css`
        font-size: 0.8rem;
        color: #000;
        margin-top: -1rem;
      `}
  }
  input {
    height: 3rem;
    border: none;
    border-bottom: 2px solid #cecece;
    outline: none;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;

    &:focus ~ label {
      font-size: 0.8rem;
      color: #000;
      margin-top: -1rem;
    }
  }
`;

export default function FormInput({ name, label, ...otherProps }) {
  return (
    <Wrapper value={otherProps.value}>
      <input {...otherProps} />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
}
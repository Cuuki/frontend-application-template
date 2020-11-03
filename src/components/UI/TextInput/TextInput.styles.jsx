import styled from 'styled-components';

export const TextInputStyled = styled.input`
  padding: 1rem 1.25rem;
  border: 0.0625rem solid ${({isValid}) => (!isValid ? 'red' : '#e3e5e7')};
  flex: 1 1 auto;
  max-width: 100%;
  border-radius: 0.75rem;
  font-family: inherit;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #4b5057;
  background-color: #fff;
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
`;

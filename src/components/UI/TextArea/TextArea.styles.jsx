import styled from 'styled-components';

const PADDING_Y = 1;
const LINE_HEIGHT = 1.25;

export const TextAreaStyled = styled.textarea`
  padding: ${PADDING_Y}rem 1.25rem;
  border: 0.0625rem solid ${({isValid}) => (!isValid ? 'red' : '#e3e5e7')};
  flex: 1 1 auto;
  max-width: 100%;
  min-height: ${(PADDING_Y * 2) / LINE_HEIGHT}rem;
  border-radius: 0.75rem;
  font-family: inherit;
  font-size: 1.25rem;
  line-height: ${LINE_HEIGHT};
  color: #4b5057;
  background-color: #fff;
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
`;

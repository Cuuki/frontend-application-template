import styled from 'styled-components';

export const FormFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.25rem;
`;
export const FormFieldMessageStyled = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0;
  font-family: inherit;
  font-size: 0.875rem;
  color: ${({isValid}) => (isValid ? '#4b5057' : 'red')};
`;

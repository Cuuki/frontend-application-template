import styled from 'styled-components';

export const FormFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.25rem;
`;
export const FormFieldMessageStyled = styled.p`
  color: ${({isValid}) => (isValid ? 'green' : 'red')};
`;

import styled from 'styled-components';

export const FormFieldStyled = styled.div``;
export const FormFieldMessageStyled = styled.p`
  color: ${({isValid}) => (isValid ? 'green' : 'red')};
`;

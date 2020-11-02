import styled from 'styled-components';

export const SignUpAddressGroupStyled = styled.fieldset`
  display: ${({hidden}) => (hidden ? 'none' : 'block')};
`;

import styled from 'styled-components';

export const ButtonStyled = styled.button`
  outline-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9375rem;
  border: none;
  border-radius: 0.5rem;
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  font-family: inherit;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.0125rem;
  background-color: ${({variant}) =>
    variant === 'primary' ? '#32D390' : '#373C47'};
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.13) 0 0.5rem 0.9375rem 0,
    rgba(40, 45, 57, 0.08) 0 0.5rem;
  cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
  ${({disabled}) =>
    disabled &&
    `
    opacity: 0.5;
  `}
`;

import styled from 'styled-components';

export const AppFormControlWrapper = styled.div`
  margin-bottom: 1rem;
  
  label {
    font-size: 1.25rem;
  }
`;

export const AppFormControlError = styled.div`
  color: ${(props) => props.theme.colors.error};
  height: 20px;
`;

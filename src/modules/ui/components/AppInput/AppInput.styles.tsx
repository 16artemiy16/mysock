import styled from 'styled-components';
import { base, borders, onHover } from '../../styles/base.styles';

export const Input = styled.input`
  ${base};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  ${onHover}
`;

export const PostfixWrapper = styled.div`
  ${borders};
  border-left: 0;
  border-bottom: 0;
`

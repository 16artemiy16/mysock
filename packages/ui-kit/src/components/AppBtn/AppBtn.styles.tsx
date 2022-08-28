import styled, { css } from 'styled-components';
import { ThemeI } from '@mysock-front/application/src/styles/theme.styles';
import { base, onHover } from '../../styles/base.styles';

interface Props {
  isLink?: boolean;
  isActive?: boolean
  theme: ThemeI;
  width?: string;
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  ${base};
  ${onHover}
  width: ${props => props.width || null};
  background-color: ${props => getBackground(props)};
  cursor: ${props => props.disabled && 'not-allowed'};
  
  a {
    text-decoration: none;
    color: black;
  }
`;

function getBackground ({ isLink, isActive, theme, disabled }: Record<string, any>): string {
  const { colors } = theme;
  if (disabled) {
    return colors.grayLight;
  }
  if (!isLink) {
    return colors.white;
  }
  return isActive ? colors.linkActive : colors.link;
}

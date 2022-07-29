import styled from 'styled-components';
import { ThemeI } from '../../../../styles/theme.styles';
import { base, onHover } from '../../styles/base.styles';

interface Props {
  isLink?: boolean;
  isActive?: boolean
  theme: ThemeI;
  width?: string;
}

export const Button = styled.button<Props>`
  ${base};
  ${onHover}
  width: ${props => props.width || null};
  background-color: ${props => getBackground(props)};

  a {
    text-decoration: none;
    color: black;
  }
`;

function getBackground ({ isLink, isActive, theme }: Record<string, any>): string {
  const { colors } = theme;
  if (!isLink) {
    return colors.white;
  }
  return isActive ? colors.linkActive : colors.link;
}

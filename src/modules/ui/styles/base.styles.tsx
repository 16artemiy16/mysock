import { css } from 'styled-components';

export const baseUIStyles = css`
  align-self: center;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color:  ${props => props.theme.colors.black};
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-color: ${props => props.theme.colors.black};
  
  user-select: none;
  touch-action: manipulation;

  &:hover {
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
  }
`;
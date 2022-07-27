import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './AppBtn.styles';
import { useMatch, useNavigate } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<any> {
  /** Text content of the button. **/
  children?: string;
  /** It it's a link. **/
  to?: string;
  width?: string;
}

const AppBtn: FC<Props> = ({ children, to, width, ...rest }) => {
  const isLink = !!to;
  const isActive = !!useMatch(to || '');
  const navigate = useNavigate();

  const handleClick = isLink ? () => navigate(to) : () => null;

  return <Button
    {...rest}
    isActive={isActive}
    isLink={isLink}
    onClick={handleClick}
    width={width}
  >
    {children}
  </Button>
}

export default AppBtn;

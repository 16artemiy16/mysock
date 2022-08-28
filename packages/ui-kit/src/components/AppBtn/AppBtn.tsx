import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from './AppBtn.styles';
import { useMatch, useNavigate } from 'react-router-dom';

export interface AppBtnProps extends ButtonHTMLAttributes<any> {
  /** Text content of the button. **/
  children?: string;
  /** It it's a link. **/
  to?: string;
  width?: string;
}

const AppBtn: FC<AppBtnProps> = ({ children, to, width, ...rest }) => {
  const isLink = !!to;
  const isActive = !!useMatch(to || '');
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    if (rest.disabled) {
      return;
    }
    const additionalAction = isLink ? () => navigate(to) : () => null;
    if (rest.onClick) {
      rest!.onClick(e)
    }
    additionalAction();
  }

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

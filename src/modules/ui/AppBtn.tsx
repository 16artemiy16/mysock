import { FC } from 'react';
import { Button } from './AppBtn.styles';
import { useMatch, useNavigate } from 'react-router-dom';

interface Props {
  /** Text content of the button. **/
  children?: string;
  /** It it's a link. **/
  to?: string;
}

const AppBtn: FC<Props> = ({ children, to }) => {
  const isLink = !!to;
  const isActive = !!useMatch(to as string);
  const navigate = useNavigate();

  const handleClick = isLink ? () => navigate(to) : () => null;

  return <Button isActive={isActive} isLink={isLink} onClick={handleClick}>{children}</Button>
}

export default AppBtn;

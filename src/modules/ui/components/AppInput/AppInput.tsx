import { FC, InputHTMLAttributes } from 'react';
import { Input } from './AppInput.styles';

interface Props extends InputHTMLAttributes<any> {}

const AppInput: FC<Props> = ({ ...rest }) => {
  return (
    <Input {...rest} />
  );
};

export default AppInput;

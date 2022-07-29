import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Input, PostfixWrapper, Wrapper } from './AppInput.styles';
import AppIcon from '../AppIcon/AppIcon';
import { AllowedImg } from '../AppIcon/icons';

interface Props extends InputHTMLAttributes<any> {
  postfixIcon?: AllowedImg;
}

const AppInput: FC<Props> = ({ postfixIcon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!inputRef) return;
    setHeight(inputRef.current?.clientHeight || 0);
  }, [inputRef]);

  return (
    <Wrapper>
      <Input {...rest} ref={inputRef} />
      { postfixIcon && (
        <PostfixWrapper style={ {marginLeft: '3px'} }>
          <AppIcon img={postfixIcon} size={ height }/>
        </PostfixWrapper>
      ) }
    </Wrapper>
  );
};

export default AppInput;

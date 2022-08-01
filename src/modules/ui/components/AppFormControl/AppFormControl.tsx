import { FC, ReactElement, useEffect, useState } from 'react';
import { AppFormControlError, AppFormControlWrapper } from './AppFormControl.styles';
import { createBulkValidator, required, ValidatorFn, ValidatorName } from './validators';

type Validator = ValidatorFn | ValidatorName;

interface Props {
  /** Input field. **/
  children: ReactElement,
  /** Set id attribute to the children input if you want children focusing on label click. **/
  label?: string;

  value: string;

  validators?: Validator[];
}


const AppFormControl: FC<Props> = ({
    children,
    label,
    validators = [],
    value,
}) => {
  const [error, setError] = useState<string | null>(null);

  if (!children || Array.isArray(children)) {
    throw new Error(
      'You can pass only one child and it should be an input! Example:\n' +
      '  <AppFormControlWrapper label="My Input">\n' +
      '    <AppInput />\n' +
      '  </AppFormControlWrapper>'
    );
  }

  useEffect(() => {
    const validator = createBulkValidator(validators);
    setError(
      validator(value),
    );
  }, [value, validators]);

  return (
    <AppFormControlWrapper>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      <AppFormControlError>
        {error}
      </AppFormControlError>
    </AppFormControlWrapper>
  );
};

export default AppFormControl;

import { Children, cloneElement, useContext, useEffect } from 'react';
import { createBulkValidator } from '../AppFormControl/validators';
import { isElementAllowedAsFormControl } from '../../utils/formGroup.utils';
import { AppFormGroupContext } from './context';

export const AppFormGroupControl = ({ children, name }: any) => {
  const { model, onModelChange, controlWrapper, setErrors, errors, validators } = useContext(AppFormGroupContext);
  const value = (model as any)[name];
  const controlValidators = validators[name];

  useEffect(() => {
    const validator = createBulkValidator(controlValidators);
    const error = validator(value);
    setErrors({ ...errors, [name]: error });
  }, [value, controlValidators]);

  const handleControlChange = (field: string, value: string | number | boolean) => {
    onModelChange({ ...model, [field]: value });
  };

  const newChildren = Children.map(children, (child) => {
    if (!isElementAllowedAsFormControl(child)) {
      return child;
    }

    return cloneElement(child, {
      value,
      onChange: (e) => {
        handleControlChange(name, (e.target as any).value);

        if (child.props.onChange) {
          child.props.onChange(e);
        }
      },
    });
  });

  return cloneElement(controlWrapper(), {
    children: newChildren,
  });
};

export default AppFormGroupControl;

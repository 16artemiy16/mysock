import { Children, cloneElement, useEffect } from 'react';
import { isElementAllowedAsFormControl, isElementLabel } from '../../utils/formGroup.utils';

export const AppFormGroup: any = ({ children, model, onModelChange, groupWrapper, controlWrapper }: any) => {
  useEffect(() => {
    onModelChange(model);
  }, [model]);

  const handleControlChange = (field: string, value: string | number | boolean) => {
    onModelChange({ ...model, [field]: value });
  };

  const newChildren = Children.map(children, (child) => {
    const { name } = child.props;

    if (!name) {
      throw Error('The name prop is mandatory!');
    }

    return cloneElement(child, {
      controlWrapper,
      value: model[name],
      onValueChange: (value: any) => {
        handleControlChange(name, value);
      },
    });
  });

  return cloneElement(groupWrapper ? groupWrapper() : <></>, {
    children: newChildren,
  });
}

AppFormGroup.Control = ({ children, value, onValueChange, controlWrapper }: any) => {
  const newChildren = Children.map(children, (child) => {
    if (!isElementAllowedAsFormControl(child) && !isElementLabel(child)) {
      throw Error(`This element cannot be used neither as a form control nor label - ${child.type}`);
    }

    return cloneElement(child, {
      value,
      onChange: (e) => {
        onValueChange((e.target as any).value);

        if (child.props.onChange) {
          child.props.onChange();
        }
      },
    });
  });

  return cloneElement(controlWrapper ? controlWrapper() : <></>, {
    children: newChildren,
  });
}

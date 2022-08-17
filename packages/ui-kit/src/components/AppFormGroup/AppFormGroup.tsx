import { Children, cloneElement, FC, SyntheticEvent, useEffect, useState } from 'react';

export const AppFormGroup: any = ({ children, model, onModelChange }: any) => {
  useEffect(() => {
    onModelChange(model);
  }, [model]);

  const handleControlChange = (field: string, value: string | number | boolean) => {
    onModelChange({ ...model, [field]: value });
  };

  return Children.map(children, (child) => {
    const { name } = child.props;

    if (!name) {
      throw Error('The name prop is mandatory!');
    }

    return cloneElement(child, {
      value: model[name],
      onValueChange: (value: any) => {
        handleControlChange(name, value);
      },
    });
  });
}

AppFormGroup.Control = ({ children, value, onValueChange }: any) => {
  return Children.map(children, (child) => {
    if (child.props.onChange) {
      child.props.onChange();
    }

    return cloneElement(child, {
      value,
      onChange: (e) => {
        onValueChange((e.target as any).value);
      },
    });
  });
}

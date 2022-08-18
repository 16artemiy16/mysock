import { Children, cloneElement, createContext, ReactElement, useContext, useEffect } from 'react';
import { isElementAllowedAsFormControl } from '../../utils/formGroup.utils';

interface AppFormGroupContextI<T = Record<string, any>> {
  model: T,
  onModelChange: (newModel: T) => void,
  controlWrapper: () => ReactElement,
}

const AppFormGroupContext = createContext<AppFormGroupContextI>({
  model: {},
  onModelChange: () => null,
  controlWrapper: () => <></>,
});

export const AppFormGroup: any = ({ children, model, onModelChange, groupWrapper, controlWrapper = () => <></> }: any) => {
  useEffect(() => {
    onModelChange(model);
  }, [model]);

  const wrappedChildren = cloneElement(groupWrapper ? groupWrapper() : <></>, {
    children,
  });

  return <AppFormGroupContext.Provider value={{ model, onModelChange, controlWrapper }}>
    { wrappedChildren }
  </AppFormGroupContext.Provider>;
}

AppFormGroup.Control = ({ children, name }: any) => {
  const { model, onModelChange, controlWrapper } = useContext(AppFormGroupContext);
  const value = (model as any)[name];

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
}

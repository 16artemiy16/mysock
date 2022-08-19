import { cloneElement, useEffect } from 'react';
import { AppFormGroupContext } from './context';


export const AppFormGroup: any = ({
  children,
  model,
  onModelChange,
  validators,
  setErrors,
  errors,
  groupWrapper,
  controlWrapper = () => <></>,
}: any) => {
  useEffect(() => {
    onModelChange(model);
  }, [model]);

  const wrappedChildren = cloneElement(groupWrapper ? groupWrapper() : <></>, {
    children,
  });

  return <AppFormGroupContext.Provider value={{ model, onModelChange, controlWrapper, errors, setErrors, validators }}>
    { wrappedChildren }
  </AppFormGroupContext.Provider>;
}

export default AppFormGroup;

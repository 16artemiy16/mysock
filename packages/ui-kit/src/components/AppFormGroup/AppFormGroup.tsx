import { cloneElement, useEffect } from 'react';
import { AppFormGroupContext } from './context';


export const AppFormGroup: any = ({
  handler,
  children,
  groupWrapper,
  controlWrapper = () => <></>,
}: any) => {
  const { model, onModelChange, errors, setErrors, validators } = handler;

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

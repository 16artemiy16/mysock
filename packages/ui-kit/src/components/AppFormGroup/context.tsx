import { createContext, ReactElement } from 'react';

interface AppFormGroupContextI<T = Record<string, any>> {
  errors: Partial<Record<keyof T, string>>,
  model: T,
  onModelChange: (newModel: T) => void,
  setErrors: (newErrors: Partial<Record<keyof T, string>>) => void,
  controlWrapper: () => ReactElement,
  validators: Record<string, any>,
}

export const AppFormGroupContext = createContext<AppFormGroupContextI>({
  errors: {},
  model: {},
  onModelChange: () => null,
  setErrors: () => null,
  controlWrapper: () => <></>,
  validators: {},
});

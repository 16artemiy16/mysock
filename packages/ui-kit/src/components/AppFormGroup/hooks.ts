import { useMemo, useState } from 'react';
import { ValidatorFn, ValidatorName } from './validators';

type UseFormGroupParams<T> = Record<keyof T, [T[keyof T], ...(ValidatorFn | ValidatorName)[]]>

export const useFormGroup = <T extends Record<string, any>>(data: UseFormGroupParams<T>) => {
  const rawValuesAndValidators = useMemo(
    () => Object
      .entries(data)
      .reduce((all, [key, valueAndValidators]) => {
        const [value, ...validators] = valueAndValidators;
        return {
          values: { ...all.values, [key]: value },
          validators: { ...all.validators, [key]: validators || [] }
        };
      }, { values: {}, validators: {} }),
    [],
  );

  const [model, setModel]  = useState<Record<string, any>>(rawValuesAndValidators.values);
  const [errors, setErrors] = useState<Record<string, any>>({ });

  const isValid = useMemo(() => Object.values(errors).filter(Boolean).length === 0, [errors]);

  const handler = {
    model,
    onModelChange: setModel,
    errors,
    setErrors,
    validators: rawValuesAndValidators.validators,
  };

  return {
    handler,
    model,
    errors,
    isValid,
  };
};


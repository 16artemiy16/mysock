type ValidationError = string | null;
export type ValidatorFn = (value: string) => ValidationError;
export type ValidatorName = 'required' | 'email';

export const minLen = (min: number, msg?: string): ValidatorFn => (value) => {
  const DEFAULT_MSG = `Fiend should be of at least ${min} symbols length.`;
  if (value.length >= min) {
    return null;
  }
  return msg || DEFAULT_MSG;
};

export const required = (msg?: string): ValidatorFn => (value) => {
  const DEFAULT_MSG = `This field is required.`;
  return value?.length ? null : (msg || DEFAULT_MSG);
};

export const email = (msg?: string): ValidatorFn => (value) => {
  const DEFAULT_MSG = `The email is incorrect.`;
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value
    .toLowerCase()
    .match(EMAIL_REGEX) ? null : (msg || DEFAULT_MSG);
};

export const createBulkValidator = (validators: (ValidatorFn | ValidatorName)[] = []): ValidatorFn => {
  if (!validators.length) {
    return () => null;
  }

  let error: ValidationError = null;
  return (value) => {
    validators.some((fnOrName) => {
      const fn = typeof fnOrName === 'string' ? resolveValidatorByName(fnOrName) : fnOrName;
      const validationResult = fn(value);
      if (validationResult) {
        error = validationResult;
      }
      return !!validationResult;
    });

    return error;
  }
}


function resolveValidatorByName(validatorName: ValidatorName): ValidatorFn {
  const validatorsMap: Record<ValidatorName, ValidatorFn> = {
    required: required(),
    email: email(),
  };

  return validatorsMap[validatorName];
}

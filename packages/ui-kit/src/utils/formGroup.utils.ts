import { ReactElement } from 'react';

const KEY_ALLOWED_AS_FORM_CONTROL = '__allowedAsFormControl';

export const setAllowedAsFormControl = (host: any) => host[KEY_ALLOWED_AS_FORM_CONTROL] = true;

export const isElementAllowedAsFormControl = (el: ReactElement): boolean => {
  if (typeof el.type === 'string') {
    return ['input'].includes(el.type);
  }
  return !!(el as any).type[KEY_ALLOWED_AS_FORM_CONTROL];
};

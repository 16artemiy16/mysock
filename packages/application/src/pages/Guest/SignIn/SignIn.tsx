import { SignInForm, SignInFormRow } from './SignIn.styles';
import { useMemo, useState } from 'react';
import { AppBtn, AppFormGroup, AppInput, minLen } from '@mysock-front/ui-kit';
import styled from 'styled-components';

export const AppFormControlError = styled.div`
  color: ${(props) => props.theme.colors.error};
  height: 20px;
`;


const SignIn = () => {
  const [model, setModel] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validators = useMemo(() => ({
    email: ['required', 'email'],
    password: ['required', minLen(6)]
  }), []);

  return (
      <AppFormGroup
        onModelChange={setModel}
        setErrors={setErrors}
        model={model}
        groupWrapper={() => <SignInForm />}
        controlWrapper={() => <SignInFormRow />}
        validators={validators}
      >
        <AppFormGroup.Control name="email">
          <label htmlFor="email">Email</label>
          <AppInput id="email" placeholder="Email" postfixIcon="email" />
          <AppFormControlError>{ errors.email }</AppFormControlError>
        </AppFormGroup.Control>

        <AppFormGroup.Control name="password">
          <label htmlFor="password">Password</label>
          <AppInput id="password" placeholder="Password" type="password" postfixIcon="lock" />
          <AppFormControlError>{ errors.password }</AppFormControlError>
        </AppFormGroup.Control>

        <AppBtn width="100%" type="button">Login!</AppBtn>
      </AppFormGroup>
  );
}

export default SignIn;

import styled from 'styled-components';
import { AppBtn, AppFormGroup, AppInput, minLen, useFormGroup } from '@mysock-front/ui-kit';

import { SignInForm, SignInFormRow } from './SignIn.styles';
import useAuthSandbox from '../../../store/auth/auth.sandbox';


export const AppFormControlError = styled.div`
  color: ${(props) => props.theme.colors.error};
  height: 20px;
`;


const SignIn = () => {
  const { handler, errors, model } = useFormGroup<{ email: string, password: string }>({
    email: ['', 'required', 'email'],
    password: ['', 'required', minLen(6)],
  });

  const { signIn, getSignInError } = useAuthSandbox();
  const handleLogin = () => {
    const { email, password } = model;
    signIn(email, password);
  }

  return (
      <AppFormGroup
        handler={handler}
        groupWrapper={() => <SignInForm />}
        controlWrapper={() => <SignInFormRow />}
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

        <AppBtn width="100%" type="button" onClick={handleLogin}>Login!</AppBtn>
        <AppFormControlError>{ getSignInError('general') }</AppFormControlError>
      </AppFormGroup>
  );
}

export default SignIn;

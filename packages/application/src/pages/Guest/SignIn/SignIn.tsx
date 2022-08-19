import styled from 'styled-components';
import { AppBtn, AppFormGroup, AppInput, minLen, useFormGroup } from '@mysock-front/ui-kit';

import { SignInForm, SignInFormRow } from './SignIn.styles';


export const AppFormControlError = styled.div`
  color: ${(props) => props.theme.colors.error};
  height: 20px;
`;


const SignIn = () => {
  const { handler, errors } = useFormGroup<{ email: string, password: string }>({
    email: ['', 'required', 'email'],
    password: ['', 'required', minLen(6)],
  });


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

        <AppBtn width="100%" type="button">Login!</AppBtn>
      </AppFormGroup>
  );
}

export default SignIn;

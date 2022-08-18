import { SignInForm, SignInFormRow } from './SignIn.styles';
import { useState } from 'react';
import { AppBtn, AppFormGroup, AppInput } from '@mysock-front/ui-kit';

const SignIn = () => {
  const [model, setModel] = useState({ email: '', password: '' });

  return (
      <AppFormGroup
        onModelChange={setModel}
        model={model}
        groupWrapper={() => <SignInForm />}
        controlWrapper={() => <SignInFormRow />}
      >
        <AppFormGroup.Control name="email">
          <label htmlFor="email">Email</label>
          <AppInput id="email" placeholder="Email" postfixIcon="email" />
        </AppFormGroup.Control>
        <AppFormGroup.Control name="password">
          <label htmlFor="password">Password</label>
          <AppInput id="password" placeholder="Password" type="password" postfixIcon="lock" />
        </AppFormGroup.Control>

        <AppBtn width="100%" type="button">Login!</AppBtn>
      </AppFormGroup>
  )
}

export default SignIn;

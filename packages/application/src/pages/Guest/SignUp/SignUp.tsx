import { SignUpForm } from './SignUp.styles';
import { AppBtn, AppFormControl, AppInput, minLen } from '@mysock-front/ui-kit';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passAgain, setPassAgain] = useState('');

  return (
    <SignUpForm>
      <AppFormControl label="Email" value={email} validators={['required', 'email']}>
        <AppInput
          id="email"
          postfixIcon="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AppFormControl>
      <AppFormControl label="Password" value={pass} validators={['required', minLen(6)]}>
        <AppInput
          id="password"
          type="password"
          postfixIcon="lock"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </AppFormControl>
      <AppFormControl label="Password again" value={passAgain} validators={['required']}>
        <AppInput
          id="password-again"
          type="password"
          postfixIcon="lock"
          value={passAgain}
          onChange={(e) => setPassAgain(e.target.value)}
        />
      </AppFormControl>

      <AppBtn width="100%" type="button">Sing Up</AppBtn>
    </SignUpForm>
  )
};

export default SignUp;

import { SignInForm } from './SignIn.styles';
import { useState } from 'react';
import { AppBtn, AppFormControl, AppFormGroup, AppInput, minLen } from '@mysock-front/ui-kit';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [model, setModel] = useState({ email: 'hi' });
  return (
    // <form>
    //   <AppFormGroup onModelChange={setModel} model={model}>
    //     <AppFormGroup.Control name="email">
    //       <AppInput id="email" placeholder="Email" postfixIcon="email" />
    //     </AppFormGroup.Control>
    //     <AppFormGroup.Control name="password">
    //       <AppInput id="password" placeholder="Password" type="password" postfixIcon="lock" />
    //     </AppFormGroup.Control>
    //   </AppFormGroup>
    //
    //   <AppBtn width="100%" type="button">Login!</AppBtn>
    // </form>

    <SignInForm>
      <AppFormControl label="Email" value={email} validators={['required', 'email']}>
        <AppInput
          id="email"
          placeholder="Email"
          postfixIcon="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AppFormControl>

      <AppFormControl label="Password" value={password} validators={[minLen(6)]}>
        <AppInput
          id="password"
          placeholder="Password"
          type="password"
          postfixIcon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AppFormControl>

      <AppBtn width="100%" type="button">Login!</AppBtn>
    </SignInForm>
  )
}

export default SignIn;

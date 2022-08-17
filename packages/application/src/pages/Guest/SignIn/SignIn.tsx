import { SignInForm, SignInFormRow } from './SignIn.styles';
import { useState } from 'react';
import { AppBtn, AppFormControl, AppFormGroup, AppInput, minLen } from '@mysock-front/ui-kit';

const SignIn = () => {
  const [model, setModel] = useState({ email: 'hi' });

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

      </AppFormGroup>

      // <AppBtn width="100%" type="button">Login!</AppBtn>

    // <SignInForm>
    //   <AppFormControl label="Email" value={email} validators={['required', 'email']}>
    //     <AppInput
    //       id="email"
    //       placeholder="Email"
    //       postfixIcon="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </AppFormControl>
    //
    //   <AppFormControl label="Password" value={password} validators={[minLen(6)]}>
    //     <AppInput
    //       id="password"
    //       placeholder="Password"
    //       type="password"
    //       postfixIcon="lock"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </AppFormControl>
    //
    //   <AppBtn width="100%" type="button">Login!</AppBtn>
    // </SignInForm>
  )
}

export default SignIn;

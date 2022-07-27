import AppInput from '../../../modules/ui/components/AppInput/AppInput';
import { SignInForm } from './SignIn.styles';
import AppBtn from '../../../modules/ui/components/AppBtn/AppBtn';

const SignIn = () => {
  return (
    <SignInForm>
      <AppInput placeholder="Email" />
      <AppInput placeholder="Password" type="password" />
      <AppBtn width="100%" type="button">Login!</AppBtn>
    </SignInForm>
  )
}

export default SignIn;

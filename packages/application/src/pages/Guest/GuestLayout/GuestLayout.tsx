import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { GuestContainer } from './GuestLayout.styles';
import { AppBtn } from '@mysock-front/ui-kit';


const GuestLayout: FC = () => {
  return (
    <GuestContainer className="guest">
      <nav>
        <AppBtn to="sign-in">Sign In</AppBtn>
        <AppBtn to="sign-up">Sign Up</AppBtn>
      </nav>
      <main>
        <Outlet />
      </main>
    </GuestContainer>
  );
};

export default GuestLayout;

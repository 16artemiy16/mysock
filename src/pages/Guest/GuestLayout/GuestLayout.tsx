import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const GuestLayout: FC = () => {
  return (
    <div>
      <header>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;

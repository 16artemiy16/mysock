import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthedLayout: FC = () => {
  return (
    <div>
      <header>Authed header</header>
      <div>
        <aside>SIdebar</aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthedLayout;

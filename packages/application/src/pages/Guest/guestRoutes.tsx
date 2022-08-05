import { lazy } from 'react';
import { Route } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const GuestLayout = lazy(() => import('./GuestLayout/GuestLayout' /* webpackChunkName: "GuestLayout" */));

export const getGuestRoutes = (path: string) => (
  <Route path={path} element={<GuestLayout />}>
    <Route path="sign-in" element={<SignIn />} />
    <Route path="sign-up" element={<SignUp />} />
  </Route>
);


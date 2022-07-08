import { Route } from 'react-router-dom';
import { lazy } from 'react';

const AuthedLayout = lazy(() => import('../Authed/AuthedLayout/AuthedLayout' /* webpackChunkName: "AuthedLayout" */));
const Home = lazy(() => import('./Home/Home' /* webpackChunkName: "Home" */));

export const getAuthedRoutes = (path: string) => {
  return (
    <Route path={path} element={<AuthedLayout />}>
      <Route path="home" element={<Home />} />
    </Route>
  );
};

import { Outlet, Route, Routes } from 'react-router-dom';

import CreateAccount from '../pages/Public/CreateAccount';
import Login from '../pages/Public/Login';
import { PublicRoute } from './PublicRoute';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <Outlet />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Route>
      </Routes>
    </>
  );
};

import React, { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import { PATH } from './enams';
import './App.css';
import {
  Login,
  NewPassword,
  PageNotFound,
  PasswordRecovery,
  Profile,
  Registration,
} from './pages';

const ROUTS = [
  { path: PATH.LOGIN, element: <Login /> },
  { path: PATH.NEW_PASSWORD, element: <NewPassword /> },
  { path: PATH.PAGE_NOT_FOUND, element: <PageNotFound /> },
  { path: PATH.PROFILE, element: <Profile /> },
  { path: PATH.REGISTRATION, element: <Registration /> },
  { path: PATH.PASSWORD_RECOVERY, element: <PasswordRecovery /> },
];

const App = (): ReactElement => (
  <Routes>
    {ROUTS.map(({ path, element }) => (
      <Route path={path} element={element} key={path} />
    ))}
  </Routes>
);

export default App;

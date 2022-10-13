import React, { ReactElement } from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';

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
  { path: PATH.ROOT, element: <Login /> },
  { path: PATH.LOGIN, element: <Login /> },
  { path: PATH.NEW_PASSWORD, element: <NewPassword /> },
  { path: PATH.PAGE_NOT_FOUND, element: <PageNotFound /> },
  { path: PATH.PROFILE, element: <Profile /> },
  { path: PATH.REGISTRATION, element: <Registration /> },
  { path: PATH.PASSWORD_RECOVERY, element: <PasswordRecovery /> },
  { path: PATH.BAD_PATH, element: <PageNotFound /> },
];

const App = (): ReactElement => (
  <>
    <div>
      <NavLink to={PATH.LOGIN}>- Login -</NavLink>
      <NavLink to={PATH.NEW_PASSWORD}>- NewPassword -</NavLink>
      <NavLink to={PATH.PROFILE}>- Profile -</NavLink>
      <NavLink to={PATH.REGISTRATION}>- Registration -</NavLink>
      <NavLink to={PATH.PASSWORD_RECOVERY}>- PasswordRecovery -</NavLink>
    </div>
    <Routes>
      {ROUTS.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </>
);

export default App;

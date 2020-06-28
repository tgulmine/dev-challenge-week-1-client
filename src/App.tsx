import React, { useState } from 'react';
import './styles/main.scss';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Register from './pages/Register';
import Users from './pages/Users';

interface AppProps {
  page: string;
}

const App: React.FC<AppProps> = props => {
  const { page } = props;
  const [token, setToken] = useState();

  return page === '/' ? (
    <Register />
  ) : page === 'login' ? (
    <Login />
  ) : page === 'posts' ? (
    <Posts />
  ) : page === 'register' ? (
    <Register />
  ) : page === 'users' ? (
    <Users />
  ) : null;
};

export default App;

import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  function logOut() {
    localStorage.setItem('access_token', '');
    window.location.pathname = '/';
  }

  function getEmail() {
    return localStorage.getItem('email');
  }

  function isLogged() {
    if (localStorage.getItem('access_token') === '') return false;
    return true;
  }

  return (
    <div className="flex w-full justify-around align-middle text-black text-lg text-center font-semibold">
      <Link to="/" className="flex w-1/4 text-2xl items-center justify-center text-blue-700 pt-2">
        Dev Challenge Week 1
      </Link>
      <div className="flex w-1/2 justify-between">
        <Link to="/login" className="w-1/4">
          <div
            className={
              window.location.pathname === '/login' || (window.location.pathname === '/' && !isLogged())
                ? 'w-auto bg-blue-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-blue-700 rounded-bl-lg'
                : 'w-auto bg-blue-300 hover:bg-blue-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-blue-700 rounded-bl-lg'
            }
          >
            Login
          </div>
        </Link>
        <Link to="/posts" className="w-1/4">
          <div
            className={
              window.location.pathname === '/posts' || (window.location.pathname === '/' && isLogged())
                ? 'w-auto bg-blue-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700'
                : 'w-auto bg-blue-300 hover:bg-blue-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700'
            }
          >
            Posts
          </div>
        </Link>
        <Link to="/register" className="w-1/4">
          <div
            className={
              window.location.pathname === '/register'
                ? 'w-auto bg-blue-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700'
                : 'w-auto bg-blue-300 hover:bg-blue-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700'
            }
          >
            Register
          </div>
        </Link>
        <Link to="/users" className="w-1/4">
          <div
            className={
              window.location.pathname === '/users'
                ? 'w-auto bg-blue-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700 rounded-br-lg'
                : 'w-auto bg-blue-300 hover:bg-blue-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-blue-700 rounded-br-lg'
            }
          >
            Users
          </div>
        </Link>
      </div>
      {localStorage.getItem('access_token') !== '' ? (
        <div className="text-lg flex items-center w-1/4 justify-between pt-1">
          <div className="w-2/3 text-base">Logged as {getEmail()}</div>
          <button className="w-1/3 hover:text-blue-700 text-blue-400 font-bold focus:outline-none" type="button" onClick={() => logOut()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="text-lg flex items-center w-1/4 justify-center">Currently not logged in</div>
      )}
    </div>
  );
};

export default Navbar;

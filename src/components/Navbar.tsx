import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex w-2/3 justify-between align-middle text-black text-xl text-center font-semibold">
      <Link to="/login" className="w-1/4">
        <div
          className={
            window.location.pathname !== '/login' && window.location.pathname !== '/'
              ? 'w-auto bg-red-300 hover:bg-red-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-red-700 rounded-bl-lg'
              : 'w-auto bg-red-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-red-700 rounded-bl-lg'
          }
        >
          Login
        </div>
      </Link>
      <Link to="/posts" className="w-1/4">
        <div
          className={
            window.location.pathname !== '/posts'
              ? 'w-auto bg-red-300 hover:bg-red-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700'
              : 'w-auto bg-red-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700'
          }
        >
          Posts
        </div>
      </Link>
      <Link to="/register" className="w-1/4">
        <div
          className={
            window.location.pathname !== '/register'
              ? 'w-auto bg-red-300 hover:bg-red-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700'
              : 'w-auto bg-red-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700'
          }
        >
          Register
        </div>
      </Link>
      <Link to="/users" className="w-1/4">
        <div
          className={
            window.location.pathname !== '/users'
              ? 'w-auto bg-red-300 hover:bg-red-400 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700 rounded-br-lg'
              : 'w-auto bg-red-600 p-2 pl-3 pr-3 cursor-pointer uppercase border-2 border-t-0 border-l-0 border-red-700 rounded-br-lg'
          }
        >
          Users
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

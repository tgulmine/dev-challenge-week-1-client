import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Login: React.FC = () => {
  async function loginUser(email: string, password: string) {
    const user = {
      email: email,
      password: password
    };
    console.log(user);
    try {
      const res = await axios.get('http://localhost:4000/users');
      console.log('response', res);
      res.data.forEach((u: { email: string; password: string }) => {
        /* if (u === user) console.log('logo'); */
        console.log(u);
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  function clickLogin() {
    var emailElem: HTMLInputElement = document.getElementById('userEmail') as HTMLInputElement;
    var emailValue: any = emailElem.value;
    var passwordElem: HTMLInputElement = document.getElementById('userPassword') as HTMLInputElement;
    var passwordValue: any = passwordElem.value;

    loginUser(emailValue, passwordValue);
    emailElem.value = '';
    passwordElem.value = '';
  }

  return (
    <div className="flex flex-col w-full h-screen items-center bg-teal-100">
      <Navbar />

      <div className="flex flex-col rounded border-blue-400 shadow-outline mt-20 p-4 bg-white">
        <div className="flex justify-center items-center text-lg">Sign In</div>
        <div className="flex items-center mr-2 mt-4 w-full justify-around">
          <div className="text-black text-base w-1/3 ml-2">Email:</div>
          <input
            className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
            id="userEmail"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="flex items-center mr-2 mt-4 w-full justify-around">
          <div className="text-black text-base w-1/3 ml-2">Password:</div>
          <input
            className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
            id="userPassword"
            type="password"
            placeholder="Your password"
            min="6"
            required
          />
        </div>
        <button
          className="mt-6 bg-blue-400 hover:bg-transparent hover:text-blue-400 border-2 border-transparent hover:border-blue-400 text-white text-lg font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none focus:shadow-blackOutline"
          type="button"
          onClick={() => clickLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

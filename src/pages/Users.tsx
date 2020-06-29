import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Users: React.FC = () => {
  const [userList, setUserList] = useState(['']);
  const [errorMsg, setErrorMsg] = useState(null);

  function isLogged() {
    if (localStorage.getItem('access_token') === '') return false;
    return true;
  }

  useEffect(() => {
    if (!isLogged()) window.location.pathname = '/';
    else getUsers();
  }, []);

  async function getUsers() {
    const header = {
      // eslint-disable-next-line prettier/prettier
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    };
    try {
      const res = await axios({
        url: 'http://localhost:4000/640/users',
        method: 'GET',
        headers: header
      });
      var users: any[] = [];
      res.data.forEach((user: any, index: number) => {
        users.push(res.data[index].email);
      });
      setUserList(users);
      console.log(users);
      /* console.log(res); */
    } catch (e) {
      console.log('error', e.response.data);
      setErrorMsg(e.response.data);
    }
  }

  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="mt-8 mb-8 text-xl font-bold">User List</div>
      {userList && userList.map((user, index) => <div className="text-black text-sm text-center">{user}</div>)}
      {errorMsg ? <div className="mt-4 text-red-500 text-base text-center font-bold">{errorMsg}</div> : null}
      <div className="mb-6" />
    </div>
  );
};

export default Users;

import * as React from 'react';
import Navbar from '../components/Navbar';

const Register: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="mt-2 text-2xl font-bold">Register</div>
    </div>
  );
};

export default Register;

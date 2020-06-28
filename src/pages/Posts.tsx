import * as React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="mt-2 text-2xl font-bold">Posts</div>
    </div>
  );
};

export default Posts;

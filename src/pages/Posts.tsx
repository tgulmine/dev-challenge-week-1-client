import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

interface PostInfo {
  title: string;
  id: number;
}

const Posts: React.FC = () => {
  const [postList, setPostList] = useState<PostInfo[]>([]);
  const [showMsgDelete, setShowMsgDelete] = useState(false);
  const [showMsgPost, setShowMsgPost] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  function isLogged() {
    if (localStorage.getItem('access_token') === '') return false;
    return true;
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const res = await axios.get('http://localhost:4000/664/posts');
      var posts: PostInfo[] = [];
      res.data.forEach((post: PostInfo, index: number) => {
        posts.push(res.data[index]);
      });
      setPostList(posts);
      console.log(posts);
      console.log(res);
    } catch (e) {
      console.log('error', e.response.data);
      setErrorMsg(e.response.data);
    }
  }

  async function deletePost(id: number) {
    const header = {
      // eslint-disable-next-line prettier/prettier
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    };
    try {
      const res = await axios({
        url: `http://localhost:4000/664/posts/${id}`,
        method: 'DELETE',
        headers: header
      });
      console.log(res);
      window.location.pathname = '/';
    } catch (e) {
      console.log('error', e.response.data);
      setErrorMsg(e.response.data);
    }
  }

  function clickDelete(id: number) {
    if (isLogged()) deletePost(id);
    else {
      setShowMsgDelete(true);
    }
  }

  function clickCreate() {
    if (isLogged()) {
      var titleElem: HTMLInputElement = document.getElementById('newPost') as HTMLInputElement;
      var titleValue: any = titleElem.value;

      createPost(titleValue);
      titleElem.value = '';
    } else {
      setShowMsgPost(true);
    }
  }

  async function createPost(title: string) {
    const post = {
      title: title
    };
    const header = {
      // eslint-disable-next-line prettier/prettier
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    };
    try {
      const res = await axios({
        url: 'http://localhost:4000/664/posts',
        data: post,
        method: 'POST',
        headers: header
      });
      console.log(res);
      window.location.pathname = '/';
    } catch (e) {
      console.log('error', e.response.data);
      setErrorMsg(e.response.data);
    }
  }

  return (
    <div className="flex flex-col w-full h-auto items-center">
      <Navbar />
      <div className="mt-8 mb-8 text-xl font-bold">Post List</div>
      {errorMsg ? <div className="mt-4 text-red-500 text-base text-center font-bold">{errorMsg}</div> : null}
      {showMsgDelete ? (
        <div className="mb-4 text-red-400 text-base text-center font-bold">É preciso estar logado para deletar um post</div>
      ) : null}
      {showMsgPost ? (
        <div className="mt-4 mb-4 text-red-400 text-base text-center font-bold">É preciso estar logado para criar um novo post</div>
      ) : null}
      {postList && postList.length > 0 ? (
        postList.map((post, index) => (
          <div className="flex items-center mb-4">
            <div className="text-black text-sm text-center mr-6">{post.title}</div>
            <button
              className="bg-red-400 hover:bg-transparent hover:text-red-400 border-2 border-transparent hover:border-red-400 text-white text-base font-bold mr-auto ml-auto px-2 rounded focus:outline-none"
              type="button"
              onClick={() => clickDelete(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-black text-sm text-center">There are no posts to show</div>
      )}
      <div className="mb-6" />
      <div className="flex items-center mr-2 mt-4 w-1/3 justify-around">
        <input
          className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-blackOutline"
          id="newPost"
          type="text"
          placeholder="Post Title"
          required
        />
        <button
          className="bg-blue-400 hover:bg-transparent hover:text-blue-400 border-2 border-transparent hover:border-blue-400 text-white text-lg font-bold mr-auto ml-auto py-2 px-4 rounded focus:outline-none"
          type="button"
          onClick={() => clickCreate()}
        >
          Create new post
        </button>
      </div>
    </div>
  );
};

export default Posts;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Register from './pages/Register';
import Users from './pages/Users';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={() => <App page={'/'} />} />
    <Route exact path="/login" component={() => <App page={'login'} />} />
    <Route exact path="/posts" component={() => <App page={'posts'} />} />
    <Route exact path="/register" component={() => <App page={'register'} />} />
    <Route exact path="/users" component={() => <App page={'users'} />} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

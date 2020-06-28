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

function isLogged() {
  if (localStorage.getItem('access_token') === '') return false;
  return true;
}

ReactDOM.render(
  <Router>
    <Route exact path="/" component={isLogged() ? Posts : Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/users" component={Users} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import { rerenderTree } from './render';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
  <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
  </BrowserRouter>, document.getElementById('root'));
}


rerenderTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

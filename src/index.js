import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: "Sveta"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Vasiliy"}
]

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How is your"},
  {id: 3, message: "Yo"}
]

let posts = [
  {id: 1, message: "Hi? how are you?", likesCount: 15},
  {id: 1, message: "It's my firs post", likesCount: 27}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import './style.css';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

import {
  renderStatus,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';

export const main = (container) => {
  // Pass these variables to your rendering functions in part 2
  const statusDiv = container.querySelector('#status');
  const usersUl = container.querySelector('#users-list');
  const postsUl = container.querySelector('#posts-list');
  const newUserForm = container.querySelector('#new-user-form');
  const newUserDiv = container.querySelector('#new-user');

  // Below, we've provided code to test the output of your functions
  // Each function should return a Promise.

  // checkResponseStatus()
  //   .then((statusInfo) => {
  //     console.log('status:', statusInfo)
  //   });

  // getUsers()
  //   .then((users) => {
  //     console.log('users:', users)
  //   });

  // getUserPosts(1, 5)
  //   .then((posts) => {
  //     console.log('posts:', posts)
  //   });

  // createNewUser({ name: 'max12', email: 'max@gmail.com' })
  //   .then((newUser) => {
  //     console.log('newUser:', newUser)
  //   });
}

// Note: This is not how you would ordinarily invoke main(). We have to include this for our tests to run properly. DO NOT CHANGE THIS
if (window.process?.env) {
  // When running tests in Node, do not invoke main
} else {
  // When running the program in the browser, DO invoke main
  main(document);
}
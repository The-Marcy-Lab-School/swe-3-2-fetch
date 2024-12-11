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

export const main = () => {
  // Pass these variables to your rendering functions in part 2
  const statusDiv = document.querySelector('#status');
  const postsUl = document.querySelector('#posts-list');
  const usersUl = document.querySelector('#users-list');
  const newUserForm = document.querySelector('#new-user-form');
  const newUserDiv = document.querySelector('#new-user');

  // Below, we've provided code to test the output of your fetching functions.
  // Feel free to use it by uncommenting it. You can delete it after (or not)
  // Each function should return a Promise and then we print the resolved value.

  // checkResponseStatus()
  //   .then((statusInfo) => {
  //     console.log('status:', statusInfo)
  //   });

  // getUsers()
  //   .then((users) => {
  //     console.log('users:', users)
  //   });

  // getUserPosts(1)
  //   .then((posts) => {
  //     console.log('posts:', posts)
  //   });

  // createNewUser({ name: 'max12', email: 'max@gmail.com' })
  //   .then((newUser) => {
  //     console.log('newUser:', newUser)
  //   });

  // TODO: Add your code for part 2 here!

}

main();
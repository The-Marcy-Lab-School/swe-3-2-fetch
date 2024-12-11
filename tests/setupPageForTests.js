
export const setupPageBasics = (document) => {
  document.body.innerHTML = `
    <h1>Intro To Fetch!</h1>
    <div id='status'></div>
    <div id='users'>
      <h2>Users</h2>
      <ul id='users-list'></ul>
    </div>
    <div id='posts'>
      <h2>Posts</h2>
      <ul id='posts-list'></ul>
    </div>
    <form id='new-user-form' aria-labelledby='new-user-heading'>
      <h2 id='new-user-heading'>Create A New Blog User!</h2>
      <label for='username'>Username:</label>
      <input type='text' id='username' name='username' />
      <label for='email'>Email:</label>
      <input type='email' id='email' name='email' />
      <button>Submit</button>
    </form>
    <div id='new-user'></div>
  `;
};
import React from 'react';

function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <form name="form">
          <div>
            <label>ID</label>
            <input type="text" name="id" value={''} />
          </div>
          <div>
            <label>PW</label>
            <input type="password" name="password" value={''} />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { SignIn };

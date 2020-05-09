import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({
    id: '',
    password: '',
    passwordCheck: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input type="text" name="id" value={user.id} onChange={handleChange} />
          </div>
          <div>
            <label>PW</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
          </div>
          <div>
            <label>PW Check</label>
            <input
              type="password"
              name="password"
              value={user.passwordCheck}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Register</button>
            <Link to="/login">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { SignUp };

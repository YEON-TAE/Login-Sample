import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefalt();
  }

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input type="text" name="id" value={id} onChange={handleChange} />
          </div>
          <div>
            <label>PW</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </div>
          <div>
            <button>Login</button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { SignIn };

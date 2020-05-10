import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions';

function Register() {
  const [user, setUser] = useState({
    id: '',
    password: '',
    passwordCheck: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.id && user.password && user.passwordCheck) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <div>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input type="text" name="id" value={user.id} onChange={handleChange} />
            {submitted && !user.id && <div>ID is required!</div>}
          </div>
          <div>
            <label>PW</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            {submitted && !user.password && <div>Password is required!</div>}
          </div>
          <div>
            <label>PW Check</label>
            <input
              type="password"
              name="passwordCheck"
              value={user.passwordCheck}
              onChange={handleChange}
            />
            {submitted && !user.passwordCheck && <div>Password Checked is required!</div>}
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

export { Register };

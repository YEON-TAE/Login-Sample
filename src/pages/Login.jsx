import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function Login() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { id, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (id && password) {
      dispatch(userActions.login(id, password));
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input type="text" name="id" value={id} onChange={handleChange} />
            {submitted && !id && <div>ID is required!</div>}
          </div>
          <div>
            <label>PW</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
            {submitted && !password && <div>Password is required!</div>}
          </div>
          <div>
            <button>
              {loggingIn && <div>Logging...</div>}
              Login
            </button>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Login };

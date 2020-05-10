import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register,
};

function login(id, password) {
  return (dispatch) => {
    dispatch(request({ id }));

    userService.login(id, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error.toString));
      },
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_REQUEST, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push('/login');
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );

    function request(user) {
      return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
      return { type: userConstants.REGISTER_REQUEST, user };
    }
    function failure(error) {
      return { type: userConstants.REGISTER_REQUEST, error };
    }
  };
}

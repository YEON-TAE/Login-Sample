import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
  register,
};

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
      return { type: userConstants.REGISTER_REQUEST, user };
    }
  };
}

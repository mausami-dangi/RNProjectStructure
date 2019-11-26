import {GET_USER_LIST} from '../Actions/Types';
import {BASE_URL} from '../../Helper/Constantss/apiConstant';

export const getUserListData = () => {
  return (dispatch, getState) => {
    return fetch(BASE_URL + 'users')
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        dispatch({
          type: GET_USER_LIST,
          payload: response,
        });
        Promise.resolve(true);
      })
      .catch(() => {
        Promise.reject(false);
      });
  };
};

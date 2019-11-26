import {GET_USER_LIST} from '../Actions/Types';

const INITIAL_STATE = {
  userListData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return {
        ...state,
        userListData: action.payload,
      };
    }
    default:
      return state;
  }
};

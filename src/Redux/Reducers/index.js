import {combineReducers} from 'redux';
import UserListReducer from './UserList';

const AppReducer = combineReducers({
  UserList: UserListReducer,
});

export {AppReducer};

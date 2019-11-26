import {connect} from 'react-redux';
import {getUserListData} from '../../Redux/Actions/UserList';
import UserList from '../Components/UserList';

const handleLocalAction = (dispatch, action, navigation) => {
  const {type} = action;

  switch (type) {
    case localActions.UserList:
      dispatch(getUserListData());
      break;
  }
};

const localActions = {
  UserList: 'UserList',
};

const mapStateToProps = state => {
  const {userListData} = state.UserList;
  return {
    localActions,
    userListData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLocalAction: (actionType, navigation) =>
      handleLocalAction(dispatch, actionType, navigation),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

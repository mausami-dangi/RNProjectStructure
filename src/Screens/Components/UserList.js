import React, {Component} from 'react';
import {View} from 'react-native';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {handleLocalAction, localActions} = this.props;
    handleLocalAction({type: localActions.UserList});
  }

  componentWillReceiveProps(nextProps) {
    alert(JSON.stringify(nextProps));
  }

  render() {
    return <View style={{flex: 1, backgroundColor: 'pink'}} />;
  }
}

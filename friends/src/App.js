import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';
import logo from './logo.svg';
import { getFriends, toggleFriend } from './actions/getFriends';

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.getFriends();
  }


  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div className="friendsList">
            <ul>
              {this.props.friends.map(friend => {
                return <li onClick={ (event) => this.props.toggleFriend(friend.id)} className={friend.toggledFriend ? 'stillFriend' : 'notFriend' } key={friend.id}>
                 {friend.name} {friend.age} {friend.email}
                 </li>
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({getFriends, friends, error}) => {
  // console.log(getFriends)
  return {
    gotFriends: getFriends,
    friends,
    error,
  }
}


export default connect(mapStateToProps, { getFriends, toggleFriend })(App);
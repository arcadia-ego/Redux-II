import React, { Component } from 'react';

import { connect } from 'react-redux';


import './App.css';
import logo from './logo.svg';
import { getFriends } from './actions/getFriends';

class App extends Component {
  componentDidMount() {
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
                return <li className="indivFriend" key={friend.id}> {friend.name} </li>
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getFriends: state.fetching,
    friends: state.friends,
    error: state.error
  }
}


export default connect(mapStateToProps, { getFriends })(App);
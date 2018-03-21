import axios from 'axios';
import { connect } from 'react-redux';
export const FRIENDGET = 'FRIENDGET'
export const FRIENDGOT = 'FRIENDGOT'
export const FRIENDPOST = 'FRIENDPOST'
export const ERROR = 'ERROR'

export const getFriends = () => dispatch => {
    dispatch({type: FRIENDGET});

    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({type: FRIENDGOT, friends: response.data }) //dispatch comes from thunk
    }).catch(err => {
        dispatch({type: ERROR, errorMessage: 'error fetching the data'})
    })
}

export const postFriends = (input) => dispatch => {
    dispatch({type: FRIENDPOST});

    axios.post('http://localhost:5000/api/friends'), {
        id,
        name,
        age,
        email
    }
    .then(response => {
        this.set
    })
}

const mapStateToProps = (state) => {
    return {
      getFriends: state.fetching,
      friends: state.friends,
      error: state.error
    }
  }

  export default connect(mapStateToProps, { postFriends })(getFriends);
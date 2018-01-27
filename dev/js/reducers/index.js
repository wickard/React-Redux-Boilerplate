//combines all reducers into one object
import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
  //movies: movieReducer
  //etc
})

export default allReducers;

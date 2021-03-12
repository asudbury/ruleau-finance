import { combineReducers } from 'redux';
import {
  userReducer,
  casesReducer
} from '../slices';

export default combineReducers({
  user: userReducer,
  cases: casesReducer
});
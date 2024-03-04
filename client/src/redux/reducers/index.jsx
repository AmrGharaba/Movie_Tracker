import { combineReducers } from 'redux';

import auth from './authReducer';
import userType from './userTypeReducer';
import alert from './alertReducer';
import admin from "./adminReducer";

export default combineReducers({
  auth,
  alert,
  userType,
  admin,
});
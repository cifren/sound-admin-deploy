import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {poolReducer} from 'sound-admin';
import {rest} from "sound-admin";
import {postAdminConfig, userAdminConfig} from './adminConfigReducer';

const rootReducer = combineReducers(Object.assign({}, {
  routing: routerReducer,       // your routing reducer
  poolReducer,                  // define the pool needed by sound-admin
  postAdminConfig,              // define your post reducer
  userAdminConfig,              // define your user reducer
}, rest.reducers     // define the rest configuration to access the data
));

export default rootReducer;
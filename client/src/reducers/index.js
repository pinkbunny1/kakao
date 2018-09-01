// combines all different reducers and export it to index.js in src
// index.js makes 'reducers' folder as a importable modules
// Can be imported with just a name 'reducers' although it does not have .js ext bc of index.js inside reducers folder

import { combineReducers } from 'redux' //combines different reducers inside reducer folder
import authReducer from './authReducer'


export default combineReducers({
  // key in combineReducers obj has to be the same as key in state obj
  auth : authReducer
})

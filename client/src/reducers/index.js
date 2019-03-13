import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
//named variables inside {} cannot change but can...
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});

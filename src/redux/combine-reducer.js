import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './reducers/authorization.reducer';
import register from './reducers/registration.reducer';




export default combineReducers({
    form: formReducer,
    auth,
    register
});
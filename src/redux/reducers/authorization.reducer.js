//import { actionSetAuthToken, actionClearAuthToken } from '../actions/authorization.action';

export default (state = {}, action) => {
    switch (action.type) {

        case "actionSetAuthToken":
            return {
                ...state,
                ...action.payLoad.data.access_token
            }
        case "actionClearAuthToken":
            return {

            }

        default:
            return state;
    }
}
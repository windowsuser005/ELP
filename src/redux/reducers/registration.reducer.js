import { actionGetRegistration } from '../actions/registration.action';
export default (state = {}, action) => {
    switch (action.type) {

        case actionGetRegistration:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state;
    }
}
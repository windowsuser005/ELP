import { serviceCallThunk } from '../service-call-thunk'
export const actionGetRegistration = "action/Get_Registration"


export const getRegistrationSuccess = payLoad => {
    return {
        type: actionGetRegistration,
        payLoad
    }
}

export const submitRegistration = () => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const formData = state.form.RegistrationForm.values;
            const config = {
                url: `~^service, /v1/registration~^`,
                method: "POST",
                data: formData
            }
            return await dispatch(serviceCallThunk(config));
        } catch (err) {
            throw err;
        }
    }
}

export const getRegistration = () => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const config = {
                url: `~^service, /v1/registration~^`,
                method: "GET"
            }
            return await dispatch(serviceCallThunk(config, getRegistrationSuccess));
        } catch (err) {
            throw err;
        }
    }
}
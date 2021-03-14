import axios from "axios";

export const serviceCallThunk = (config, success, fail) => {
    return dispatch => new Promise((resolve, reject) => {
        axios(config).then((response) => {
            const responseData = response && response.data ? response.data : response
            resolve(success ? dispatch(success(responseData)) : responseData);
        }).catch(error => {
            const errorData = error && error.data ? error.data : error
            reject(fail ? dispatch(fail(errorData)) : errorData);
        });
    });
}

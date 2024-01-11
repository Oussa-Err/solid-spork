import axios from "axios";

export const signUp = (user_input) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/users/signup`, user_input)
        dispatch({
            type: 'SIGNUP_DATA_SUCCESS',
            payload: data
        })
    } catch (err) {
        dispatch({
            type: "SIGNUP_DATA_FAILURE",
            payload: err.response?.data?.message
        })
    }
}


export const logInUser = (user_input) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/users/login`, user_input)
        dispatch({
            type: 'LOGIN_DATA_SUCCESS',
            payload: data
        })
    } catch (err) {
        dispatch({
            type: 'LOGIN_DATA_FAILURE',
            payload: err.response?.data?.message
        })
    }
}
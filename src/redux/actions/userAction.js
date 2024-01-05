import axios from "axios";

export const signUp = (user_input) => async (dispatch) => {
    try {
        // const {name, email, password, confirmedPassword} = user_input
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/users/signup`, user_input)
        dispatch({
            type: 'SIGNUP_DATA_SUCCESS',
            payload: data
        })
    } catch (err) {
        dispatch({ type: "SIGNUP_DATA_FAILURE", payload: err.response?.data?.message })
    }
}
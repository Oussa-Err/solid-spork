import axios from "axios";

// Function to get cookie by name
const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

axios.interceptors.request.use(
    (config) => {
      const token = getCookie('jwt')
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

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
        const response = await axios.post(`http://127.0.0.1:8080/api/v1/users/login`, user_input)

        const setCookieHeader = response.headers.getCookie("jwt");
        console.log("executed..")
        console.log(setCookieHeader)
        
        
        dispatch({
            type: 'LOGIN_DATA_SUCCESS',
            payload: response.data
        })

    } catch (err) {
        dispatch({
            type: 'LOGIN_DATA_FAILURE',
            payload: err.response?.data?.message
        })
    }
}

export const logOutUser = (user_input) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://127.0.0.1:8080/api/v1/users/logout`, user_input)

        dispatch({
            type: "LOGOUT_DATA_SUCCESS",
            payload: data
        })

    } catch (err) {

        dispatch({
            type: "LOUGOUT_DATA_FAILURE",
            payload: err.response?.data?.message
        })

    }
}


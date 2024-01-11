import * as typeStore from "../typeStore";

const initialState = {
    data: null,
    error: null,
    user: null
};



const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeStore.FETCH_DATA_SUCCESS:
            return { ...state, data: action.payload, error: null };
        case typeStore.FETCH_DATA_FAILURE:
            return { ...state, data: null, error: action.payload };
        case typeStore.SIGNUP_DATA_SUCCESS:
            return { ...state, user: action.payload, error: null }
        case typeStore.SIGNUP_DATA_FAILURE:
            return { ...state, user: null, error: action.payload }
        case typeStore.LOGIN_DATA_SUCCESS:
            return { ...state, user: action.payload, error: null }
        case typeStore.LOGIN_DATA_FAILURE:
            return { ...state, user: null, error: action.payload }
        default:
            return state;
    }
};

export default dataReducer;
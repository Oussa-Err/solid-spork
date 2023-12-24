import axios from "axios";
import * as typeStore from "../typeStore";

export const fetchData = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://127.0.0.1:8080/api/v1/products`);
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
};


export const fetchDataByGenre = (genre) => async (dispatch) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/v1/products/${genre}`);
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
};

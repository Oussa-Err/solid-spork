import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../redux/reducers/reducers';

const store = configureStore({ reducer: dataReducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
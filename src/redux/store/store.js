import {legacy_createStore as createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expensesReducers';

const rootReducer =  combineReducers ({
expense: expenseReducer,
});
const initialState = {};
export const store = createStore(rootReducer,initialState);
export default rootReducer;
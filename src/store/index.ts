import { combineReducers } from 'redux';
import expensesReducer, { ExpenseState } from './redux/reducers/expensesReducer';

export interface AppState {
    expenses: ExpenseState
}
const rootReducer = combineReducers<AppState>({
    expenses: expensesReducer
})
export default rootReducer;
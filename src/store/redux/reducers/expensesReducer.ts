import actionTypes from "../actions/actionTypes";
interface Expense {
    id: number,
    name: string,
    category: string[],
    date: Date
}
export interface ExpenseState {
    selectedExpense: Array<Expense>
}
const defaultState: ExpenseState = {
    selectedExpense: Array<Expense>()
}
const expensesReducer = (state: ExpenseState = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_EXPENSES:
            return {
                ...state,
                selectedExpense: [...state.selectedExpense, action.payload]
            }
        case actionTypes.DELETE_EXPENSES: {
            return {
                ...state,
                selectedExpense: state.selectedExpense.filter((expense: any) => expense.id !== action.payload)
            }
        }
        case actionTypes.CLEAR_EXPENSE: {
            return {
                ...state,
                selectedExpense: []
            }
        }
        default:
            return state;
    }
    return state;
}
export default expensesReducer;
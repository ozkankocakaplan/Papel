import actionTypes from "../actions/actionTypes";
interface Expense {
    id: number,
    name: string,
    category: string[],
    date: Date
}
interface Person {
    id: number,
    name: string,
}
interface ShareAccount {
    accountName: string,
    expenseType: boolean,
    personList: Array<Person>,
    totalPrice: any,
    currencyFormat: string,
    accountSelected: object,
}
interface Account {
    accountCurrency: string,
    accountName: string,
    accountType: string,
}
export interface ExpenseState {
    selectedExpense: Array<Expense>,
    shareAccount: ShareAccount
    account: Account
}

const defaultState: ExpenseState = {
    selectedExpense: Array<Expense>(),
    account: { accountCurrency: '', accountName: '', accountType: '' },
    shareAccount: { accountName: '', expenseType: false, personList: Array<Person>(), totalPrice: { masked: '00,00', unmasked: null }, accountSelected: {}, currencyFormat: 'TRY' }
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
        case actionTypes.UPDATE_SHAREACCOUNT: {
            return {
                ...state,
                shareAccount: action.payload
            }
        }
        case actionTypes.UPDATE_ACCOUNT: {
            return {
                ...state,
                account: action.payload
            }
        }
        default:
            return state;
    }
}
export default expensesReducer;
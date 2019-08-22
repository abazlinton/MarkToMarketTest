import {
  LOAD_COMPANIES
} from './actions'
import transactionsHelper from '../transactionsHelper'
import transactions from '../data/transactions.json'

const defaultState = {
  companies: []
}

export default function m2m(state = defaultState, action) {
  
  switch (action.type) {

    case LOAD_COMPANIES: {
      return {...state, companies: transactionsHelper.getSortedCompanies(transactions)}
    }

    default: {
      return state
    }

  }

}
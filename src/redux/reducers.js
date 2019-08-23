import {
  REQUEST_COMPANIES,
  RECEIVE_COMPANIES
} from './actions'


const defaultState = {
  companies: [],
  isFetchingCompanies: false
}

export default function m2m(state = defaultState, action) {
  
  switch (action.type) {

    case REQUEST_COMPANIES: {
      return {...state, isFetchingCompanies: true}
    }

    case RECEIVE_COMPANIES: {
      return {...state, isFetchingCompanies: false, companies: action.companies}
    }

    default: {
      return state
    }

  }

}
import {
  REQUEST_COMPANIES,
  RECEIVE_COMPANIES,
  REQUEST_COMPANY,
  RECEIVE_COMPANY
} from './actions'


const defaultState = {
  companies: [],
  isFetching: false
}

export default function m2m(state = defaultState, action) {
  
  switch (action.type) {

    case REQUEST_COMPANIES: {
      return {...state, isFetching: true}
    }

    case RECEIVE_COMPANIES: {
      return {...state, isFetching: false, companies: action.companies}
    }

    case REQUEST_COMPANY: {
      return {...state, isFetching: true}
    }

    case RECEIVE_COMPANY: {
      return {...state, isFetching: false, company: action.company}
    }

    default: {
      return state
    }

  }

}
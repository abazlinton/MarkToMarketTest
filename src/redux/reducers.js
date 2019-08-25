import {
  REQUEST_COMPANIES,
  RECEIVE_COMPANIES,
  REQUEST_COMPANY,
  RECEIVE_COMPANY,
  CLEAR_COMPANY,
  REQUEST_COMPANY_ACQUISTIONS,
  RECEIVE_COMPANY_ACQUISTIONS,
  REQUEST_COMPANY_TARGETS,
  RECEIVE_COMPANY_TARGETS,
  ADD_PROJECT
} from './actions'


const defaultState = {
  companies: [],
  isFetching: false,
  company: { 
    acquistions: [],
    targets: []
  },
  projects: []
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
      const company = {...state.company, ...action.company }
      return {...state, isFetching: false, company}
    }

    case REQUEST_COMPANY_ACQUISTIONS: {
      return {...state, isFetching: true}
    }

    case RECEIVE_COMPANY_ACQUISTIONS: {
      const company = {...state.company, acquistions: action.acquistions}
      return {...state, isFetching: false, company }
    }

    case REQUEST_COMPANY_TARGETS: {
      return {...state, isFetching: true}
    }

    case RECEIVE_COMPANY_TARGETS: {
      const company = {...state.company, targets: action.targets}
      return {...state, isFetching: false, company }
    }

    case CLEAR_COMPANY: {
      return {...state, company: {}}
    }

    case ADD_PROJECT: {
      const newProject = {...action.project, id: state.projects.length + 1}
      const projects = [...state.projects, newProject]
      return {...state, projects }
    }

    default: {
      return state
    }

  }

}
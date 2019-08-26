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
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
  REQUEST_PROJECT,
  RECEIVE_PROJECT,
  ADD_PROJECT,
  ADDED_PROJECT,
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  ADD_TRANSACTION_TO_PROJECT
} from "./actions"

const defaultState = {
  companies: [],
  isFetching: false,
  transactions: [],
  company: {
    acquistions: [],
    targets: []
  },
  projects: [
    {
      id: 1,
      name: "Test Project",
      description: "Description for test project",
      transactions: []
    }
  ],
  project: {},
  lastAddedProjectId: 1,
  shouldRedirect: false
}

export default function m2m(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_COMPANIES: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_COMPANIES: {
      return { ...state, isFetching: false, companies: action.companies }
    }

    case REQUEST_COMPANY: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_COMPANY: {
      const company = { ...state.company, ...action.company }
      return { ...state, isFetching: false, company }
    }

    case REQUEST_COMPANY_ACQUISTIONS: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_COMPANY_ACQUISTIONS: {
      const company = { ...state.company, acquistions: action.acquistions }
      return { ...state, isFetching: false, company }
    }

    case REQUEST_COMPANY_TARGETS: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_COMPANY_TARGETS: {
      const company = { ...state.company, targets: action.targets }
      return { ...state, isFetching: false, company }
    }

    case CLEAR_COMPANY: {
      return { ...state, company: {} }
    }

    case REQUEST_TRANSACTIONS: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_TRANSACTIONS: {
      return { ...state, isFetching: false, transactions: action.transactions }
    }

    case ADD_PROJECT: {
      const nextId = state.lastAddedProjectId + 1
      const newProject = { ...action.project, id: nextId, transactions: [] }
      const projects = [...state.projects, newProject]
      return {
        ...state,
        projects,
        lastAddedProjectId: nextId,
        shouldRedirect: true
      }
    }

    case ADDED_PROJECT: {
      return { ...state, shouldRedirect: false }
    }

    case REQUEST_PROJECT: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_PROJECT: {
      return { ...state, project: action.project, isFetching: false }
    }

    case REQUEST_PROJECTS: {
      return { ...state, isFetching: true }
    }

    case RECEIVE_PROJECTS: {
      return { ...state, projects: action.projects, isFetching: false }
    }

    case ADD_TRANSACTION_TO_PROJECT: { 
      debugger

      const foundProject = state.projects.find(project => Number(project.id) === Number(action.projectId))
      const foundProjectIndex = state.projects.findIndex(project => Number(project.id) === Number(action.projectId))
      const cloneOfProject = { ...foundProject }
      const cloneOfProjectTransactions = [...cloneOfProject.transactions]
      cloneOfProjectTransactions.push(Number(action.transactionId))
      const nextProject = {...cloneOfProject, transactions: cloneOfProjectTransactions}
      const nextProjects = [
        ...state.projects.slice(0, foundProjectIndex), 
        nextProject,  
        ...state.projects.slice(foundProjectIndex + 1, state.projects.length)
      ]
      return {...state, project: nextProject, projects: nextProjects}
    }

    default: {
      return state
    }
  }
}

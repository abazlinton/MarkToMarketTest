export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY = 'REQUEST_COMPANY'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
export const REQUEST_COMPANY_ACQUISTIONS = 'REQUEST_COMPANY_ACQUISTIONS'
export const RECEIVE_COMPANY_ACQUISTIONS = 'RECEIVE_COMPANY_ACQUISTIONS'
export const REQUEST_COMPANY_TARGETS = 'REQUEST_COMPANY_TARGETS'
export const RECEIVE_COMPANY_TARGETS = 'RECEIVE_COMPANY_TARGETS'
export const CLEAR_COMPANY = 'CLEAR_COMPANY'
export const REQUEST_TRANSACTIONS = 'REQUEST_COMPANIES'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'
export const ADDED_PROJECT = 'ADDED_PROJECT'

export const requestCompanies = () => ({
  type: REQUEST_COMPANIES
})

export const receiveCompanies = (companies) => ({
  type: RECEIVE_COMPANIES,
  companies
})

export const requestCompany = (id) => ({
  type: REQUEST_COMPANY,
  id
})

export const receiveCompany = (company) => ({
  type: RECEIVE_COMPANY,
  company
})

export const requestCompanyAcquistions = (id) => ({
  type: REQUEST_COMPANY_ACQUISTIONS,
  id
})

export const receiveCompanyAcquistions = (acquistions) => ({
  type: RECEIVE_COMPANY_ACQUISTIONS,
  acquistions
})

export const requestCompanyTargets = (id) => ({
  type: REQUEST_COMPANY_TARGETS,
  id
})

export const receiveCompanyTargets = (targets) => ({
  type: RECEIVE_COMPANY_TARGETS,
  targets
})

export const clearCompany = () => ({
  type: CLEAR_COMPANY
})

export const requestTransactions = () => ({
  type: REQUEST_TRANSACTIONS
})

export const receiveTransactions = (transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})

export const requestProject = (id) => ({
  type: REQUEST_PROJECT,
  id
})

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
})

export const requestProjects = () => ({
  type: REQUEST_PROJECTS
})

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

export const addProject = (project) => ({
  type: ADD_PROJECT,
  project
})

export const addedProject = () => ({
  type: ADDED_PROJECT
})


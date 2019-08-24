export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY = 'REQUEST_COMPANY'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
export const REQUEST_COMPANY_ACQUISTIONS = 'REQUEST_COMPANY_ACQUISTIONS'
export const RECEIVE_COMPANY_ACQUISTIONS = 'RECEIVE_COMPANY_ACQUISTIONS'
export const REQUEST_COMPANY_TARGETS = 'REQUEST_COMPANY_TARGETS'
export const RECEIVE_COMPANY_TARGETS = 'RECEIVE_COMPANY_TARGETS'
export const CLEAR_COMPANY = 'CLEAR_COMPANY'

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
export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'
export const REQUEST_COMPANY = 'REQUEST_COMPANY'
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY'
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

export const clearCompany = () => ({
  type: CLEAR_COMPANY
})
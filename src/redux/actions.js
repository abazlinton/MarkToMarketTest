export const REQUEST_COMPANIES = 'REQUEST_COMPANIES'
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES'

export const requestCompanies = () => ({
  type: REQUEST_COMPANIES
})

export const receiveCompanies = (companies) => ({
  type: RECEIVE_COMPANIES,
  companies
})
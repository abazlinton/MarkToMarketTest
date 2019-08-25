import fetchMock from 'fetch-mock'
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'

export default (store) => {
  fetchMock
    .get('http://api/companies', transactionsHelper.getSortedCompanies(transactions))
    .get('express:/companies/:id', (url) => {
      const id = url.match(/\d+/)[0]
      return transactionsHelper.getCompanyById(transactions, id)
    })
    .get('express:/companies/:id/transactions', (url) => {
      const id = url.match(/\d+/)[0]
      return transactionsHelper.getAcquisitionTransactionsForCompanyWithId(transactions, id)
    }, {
        query: { "isAcquirer": "true" }
      })
    .get('express:/companies/:id/transactions', (url) => {
      const id = url.match(/\d+/)[0]
      return transactionsHelper.getTargetTransactionsForCompanyWithId(transactions, id)
    }, {
        query: { "isAcquirer": "false" },
        overwriteRoutes: false
      })
    .get('http://api/transactions',
      () => transactions.map((transaction, index) => ({ ...transaction, id: index + 1 }))
    )
    .get('express:/projects/:id', (url) => {
      const id = url.match(/\d+/)[0]
      debugger
    })
}

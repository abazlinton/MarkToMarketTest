import fetchMock from 'fetch-mock'
import transactionsHelper from './transactionsHelper'
import transactions from './data/transactions.json'

export default () => {
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
}

import fetchMock from 'fetch-mock'
import transactionsHelper from './transactionsHelper'
import transactions from './transactions.json'
import { addTransactionToProject } from '../redux/actions'

function mockFetches(store) {
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
    .get('http://api/projects', encloseStoreProjects(store))
    .get('express:/projects/:id', encloseStoreProject(store))
    .post('express:/projects/:id/transactions', 200)
}

// Yuck
const encloseStoreProject = (store) => (url) => {
  const id = url.match(/\d+/)[0]
  const foundProject = store.getState().projects.find(project => Number(project.id) === Number(id))
  if (!foundProject) return 404
  return foundProject
}

const encloseStoreProjects = (store) => () => {
  return store.getState().projects
}

const encloseStorePostProject = (store) => (url, opts) => {
  const projectId = url.match(/\d+/)[0]
  const transactionId = opts.body.transaction_id
  // elsewhere doing this in Component :S
  store.dispatch(addTransactionToProject(transactionId, projectId))
  return 200
}


export default mockFetches

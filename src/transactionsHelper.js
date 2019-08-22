
const md5 = require('md5')

export default {
  areAnyAcquirersAlsoTargets(transactions) {
    const acquirerNames = transactions.map(transaction => transaction.acquirer_name)
    const targetNames = transactions.map(transaction => transaction.target_name)
    return acquirerNames.some(acquirerName => targetNames.includes(acquirerName))
  },

  getCompanyNames(transactions) {
    return transactions.reduce((companyNames, transaction) => {
      const acquirerName = transaction.acquirer_name
      const targetName = transaction.target_name
      const nextCompanyNames = [...companyNames]
      if (!companyNames.includes(acquirerName)) nextCompanyNames.push(acquirerName)
      if (!companyNames.includes(targetName)) nextCompanyNames.push(targetName)
      return nextCompanyNames
    }, [])
  },

  getUniqueNumberForName(name) {
    return 'AB' + md5(name).match(/[0-9]/g).slice(0, 6).join('')
  },

  findNumberForTargetName(companyName, transactions) {
    const foundTransaction = transactions.find(transaction => transaction.target_name === companyName)
    return foundTransaction.target_id
  },

  getSortedCompanies(transactions) {
    const companyNames = this.getCompanyNames(transactions).sort()
    const unSortedCompanies = companyNames.reduce((companies, companyName, index) => {
      const nextCompanies = [...companies]
      const isAcquirer = transactions.map(transaction => transaction.acquirer_name).includes(companyName)
      if (isAcquirer) {
        nextCompanies.push({ name: companyName, number: this.getUniqueNumberForName(companyName) })
      } else {
        nextCompanies.push({ name: companyName, number: this.findNumberForTargetName(companyName, transactions) })
      }
      return nextCompanies
    }, [])
    const sortedCompanies = unSortedCompanies.sort((company1, company2) => company1.name.localeCompare(company2.name))
    const companiesWithId = sortedCompanies.map((company, index) => {
      return {...company, id: index + 1}
    })
    return companiesWithId
  }
}
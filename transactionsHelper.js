
module.exports = {
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
  }
}
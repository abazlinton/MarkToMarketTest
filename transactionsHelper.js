const areAnyAcquirersAlsoTargets = function(transactions){
  const acquirerNames = transactions.map(transaction => transaction.acquirer_name)
  const targetNames = transactions.map(transaction => transaction.target_name)
  return acquirerNames.some(acquirerName => targetNames.includes(acquirerName))
}

module.exports = { areAnyAcquirersAlsoTargets }
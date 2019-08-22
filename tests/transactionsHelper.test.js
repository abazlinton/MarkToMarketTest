const mocha = require('mocha')
const assert = require('assert')
const areAnyAcquirersAlsoTargets = require('../transactionsHelper').areAnyAcquirersAlsoTargets
const getCompanyNames = require('../transactionsHelper').getCompanyNames

describe('transactionsHelper', () => {

  describe('areAnyAcquirersAlsoTargets', () => {
    it('can detect when there are is at least one acquirer that is also a target', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Paddy Power", target_name: "Sky Bet" }
      ]
      assert.strictEqual(areAnyAcquirersAlsoTargets(transactions), true)
    });
  
    it('can detect when no acquirer is also a target', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Ladbrokes", target_name: "Betfair" }
      ]
      assert.strictEqual(areAnyAcquirersAlsoTargets(transactions), false)
    });
  
    it('confirms that source transactions have no acquirer that is also a target', () => {
      const transactions = require('../transactions.json')
      assert.strictEqual(areAnyAcquirersAlsoTargets(transactions), false)
    })
  
    it('can get set of company names', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Ladbrokes", target_name: "Betfair" },
        { acquirer_name: "Sky Bet", target_name: "Betfair" }
      ]
      const expectedNames = ['Sky Bet', 'Paddy Power', 'Betfair', 'Ladbrokes']
      assert.deepStrictEqual(getCompanyNames(transactions).sort(), expectedNames.sort())
    })
  });
});
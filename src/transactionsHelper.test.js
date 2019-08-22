const assert = require('assert')
const transactionsHelper = require('./transactionsHelper')

describe('transactionsHelper', () => {

  describe('areAnyAcquirersAlsoTargets', () => {
    it('can detect when there are is at least one acquirer that is also a target', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Paddy Power", target_name: "Sky Bet" }
      ]
      assert.strictEqual(transactionsHelper.areAnyAcquirersAlsoTargets(transactions), true)
    });

    it('can detect when no acquirer is also a target', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Ladbrokes", target_name: "Betfair" }
      ]
      assert.strictEqual(transactionsHelper.areAnyAcquirersAlsoTargets(transactions), false)
    });

    it('confirms that source transactions have no acquirer that is also a target', () => {
      const transactions = require('./data/transactions.json')
      assert.strictEqual(transactionsHelper.areAnyAcquirersAlsoTargets(transactions), false)
    })

    it('can get set of company names', () => {
      const transactions = [
        { acquirer_name: "Sky Bet", target_name: "Paddy Power" },
        { acquirer_name: "Ladbrokes", target_name: "Betfair" },
        { acquirer_name: "Sky Bet", target_name: "Betfair" }
      ]
      const expectedNames = ['Sky Bet', 'Paddy Power', 'Betfair', 'Ladbrokes']
      assert.deepStrictEqual(transactionsHelper.getCompanyNames(transactions).sort(), expectedNames.sort())
    })

    it('can get set of companies names within object', () => {
      const transactions = [
        { acquirer_name: "Ladbrokes", target_name: "Betfair" },
        { acquirer_name: "Sky Bet", target_name: "Betfair" }
      ]
      const companies = transactionsHelper.getSortedCompanies(transactions)
      assert.strictEqual(companies[0].name, 'Betfair')
      assert.strictEqual(companies[1].name, 'Ladbrokes')
      assert.strictEqual(companies[2].name, 'Sky Bet')
    })

    it('can get set of companies numbers', () => {
      const transactions = [
        { acquirer_name: "Ladbrokes", target_name: "Betfair", target_id: "SC123456" },
        { acquirer_name: "Sky Bet", target_name: "Betfair", target_id: "SC123456" }
      ]
      const companies = transactionsHelper.getSortedCompanies(transactions)
      assert.strictEqual(companies[0].number, 'SC123456') // Betfair
      assert.strictEqual(companies[1].number, 'AB480026') // LadBrookes
      assert.strictEqual(companies[2].number, 'AB095726') // Sky Bet
    })

    it('can get set of companies with fake Ids', () => {
      const transactions = [
        { acquirer_name: "Ladbrokes", target_name: "Betfair", target_id: "SC123456" },
        { acquirer_name: "Sky Bet", target_name: "Betfair", target_id: "SC123456" }
      ]
      const companies = transactionsHelper.getSortedCompanies(transactions)
      assert.strictEqual(companies[0].id, 1) // Betfair
      assert.strictEqual(companies[1].id, 2) // LadBrookes
      assert.strictEqual(companies[2].id, 3) // Sky Bet
    })


  });
});
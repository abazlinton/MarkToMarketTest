# Running the app

Assumes recent  versions of node (8+ ?) / npm

- clone the project
- `npm i`
- `npm start`

Run tests `npm test`

# Also hosted here:

https://m2m-app.abazlinton.now.sh


# Retrospective 

## STOP - MTM

### I think the dataset is poor. 

- It implies relational data (`target_id`) when there is none. There's also no obvious data for the implied entities other than `transactions`, namely `companies`. Also `transactions` includes data that would actually be in a different entity - `acquirer_name`, `target_name`. Also given there's time involved here, and an acquirer could later become a target there are more complicated changes that would be implied in the transactions data. Currently a companies previous 'target_id` is lost forever, and there's no record of the from / to. So I foresee other tables representing these changes over time. Essentially answering the question - 'what is an acquisition in practice'. Some answers I *guess* could be something like 
  - A new company is formed which picks up one of the previous company's number
  - A new company is formed and a new company is made (merger??)
  - One company name stays the same but other company ceases to exist in its own right

- `target_id` implies uniqueness, but the only unique field is really the name of the company. This is a bit of a red herring until you explore companies house and see how a company changes over time and see the names a company takes on over time.

### I think the task is far too big

- Especially given the issues related to the dataset above. It took me a long time to just get my head in the domain space. And I ended up wrangling the data to try and make it more reasonable.

- The estimate of 3 hours might be ok if the dataset was better (or an API was provided) and I was an expert in Redux, and perhaps there was just one resource to CRUD (e.g. Project)

- I've seen plenty of codetests even for more senior roles which were far simpler, and even just plain JS for front-end roles.

## STOP - Alex

### I let the test take over my holiday time

 - I'm not entirely comfortable with the amount of work I put into this. It took over my week's holiday which was actually TOIL due to working too many hours at CodeClan. So it didn't really serve its purpose as a break.

## START - Alex

### Testing

- I'm disappointed at small number of tests. But because a lot was unfamiliar to me I didn't want to take on this as well. There are some tests `transactionsHelper.test.js`, but nothing for reducers or the components. (I haven't done a lot of front-end testing so this would be new to me too)

 - I've used `mock-fetch` to supply the dataset. But it's not really what it's for - it's really for use in tests. But it does mean the app can call `fetch` and things work.

### Refactoring

- The Company Component should be broken down into more components

- Some lower components - e.g. `TransactionTableRow` are doing to much. They should feed up clicks etc to higher components

- Move all fetches into the actions. Currently `Project` shows the way I would go. Because `Redux thunk` was to me this I felt it was too much to start with.

- Though the `TransactionTable` is used in two places there might be some opportunity to make a more generic Table component that could be reused for companies / projects too?

- `reducers.js` is doing too much, needs split into multiple reducers

### Additions

- Currently missing is the ability to remove transactions from a project as per the brief.

- Error handling. Currently only `Project` and the action `requestProject` are doing anything much here (404)

- On a few pages it would be nice to have links to other resources. On the Projects INDEX page for example there aren't links to the Company SHOW pages.


## CONTINUE - Alex

### Continue to learn

- Before this task I'd used `Redux` only once in a small project. Without any async actions. I'd never used `Bootstrap`. I'd not used `mock-fetch`. I'd not used `Router` in a project, only taught a simple lesson on it. I also had to figure out how to make `Bootstrap` and `Router` play nicely with Links. I'd used `React Hooks` a little but it was good to consolidate that. Note: there's not one Class Component. Everything is functional. Which seems to be the direction of travel if you read between the lines of what Facebook is saying.







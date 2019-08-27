# Retrospective 

# STOP

## MTM

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

### (Alex) 




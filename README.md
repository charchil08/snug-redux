# Step towards redux in my way

- create dir

  - redux
    - actions
      - productActions.js
    - constants
      - actions.types.js
    - reducers
      - productReducer.js
      - index.js
    - store.js

- write all kind of actions in constants/action.types.js

- make an action according to constants. (basically use of rest api)

- make reducers and use of switch cases.

- in index.js, combine all reducers.

- make a store in store.js

- without middleware, action can return only Sync JS objects and nothing else.

- to use async middleware, we need to use redux-thunk.

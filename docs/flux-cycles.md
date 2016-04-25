# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## User Cycles

### User API Request Actions

* `fetchAllUsers`
  0. invoked from `Users/Index` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `fetchSingleUser`
  0. invoked from `UserPage` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUserProfile`
  0. invoked from `ProfileUpdateForm` `onSubmit`
  0. `PATCH /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUserConnection`
  0. invoked from `Connect` `onClick`
  0. `PATCH /api/users/:id` is called.
  0. `PATCH /api/users/(current_user)` is called.
  0. `receiveNewConnection` is set as the callback.



### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and emits change.

* `receiveNewConnection`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and `_users[current_user.id]` and emits change.


### Store Listeners

* `UsersIndex` component listens to `User` store.
* `UserPage` component listens to `User` store.


## Connection Cycles

### User API Request Actions

* `fetchAllUsers`
  0. invoked from `Users/Index` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `fetchSingleUser`
  0. invoked from `UserPage` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUserProfile`
  0. invoked from `ProfileUpdateForm` `onSubmit`
  0. `PATCH /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUserConnection`
  0. invoked from `Connect` `onClick`
  0. `PATCH /api/users/:id` is called.
  0. `PATCH /api/users/(current_user)` is called.
  0. `receiveNewConnection` is set as the callback.



### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and emits change.

* `receiveNewConnection`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and `_users[current_user.id]` and emits change.


### Store Listeners

* `UsersIndex` component listens to `User` store.
* `UserPage` component listens to `User` store.

# Phase 2: Flux Architecture (3 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* UsersIndex
  - UsersIndexItem

### Stores
* User
* Current User

### Actions
* ApiActions.receiveAllUsers -> triggered by ApiUtil
* ApiActions.receiveSingleUser
* ApiActions.receiveCurrentUser
* UserActions.fetchAllUsers -> triggers ApiUtil
* UserActions.fetchSingleUser
* UserActions.fetchCurrentUser
* UserActions.editUser


### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.fetchCurrentUser
* ApiUtil.editUser

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap

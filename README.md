# OkCoFounder

CURRENTLY LOOKING AT SOME GIT REPOSITORIES FOR PAST OKCUPID CLONES AND REALIZING I SET A LOT OF THINGS UP WRONG. PROBABLY GOING TO SPEND THE DAY COMPLETELY REVAMPING MY PROPOSAL BUT I ALSO HAVE SOME QUESTIONS ABOUT THE FUNDAMENTAL STRUCTURE.

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

OkCoFounder is a web application inspired by OkCupid that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an OkCupid-inspired site: browse potential matches (index), view a specific profile (with "About" and "Q&A" sections), select to "connect" with another user, view all "connections"
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

OkCoFounder will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Update Profile information ("About" and "Q&A(form)") (MVP)
- [ ] Browse an index of potential "connections" (MVP)
- [ ] Visit the profile page of another user ("About" and "Q&A") (MVP)
- [ ] Select to "connect" with another user (MVP)
- [ ] View a list of matches (both have connected with each other) (MVP)
- [ ] Narrow down the browse/index page with selection specs bar (expected, non-MVP)


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 days)

**Objective:** Functioning rails project with Authentication. Splash page for initial visit (not signed in).

- [ ] create `User` model
- [ ] authentication
- [ ] pre-sign up page ("I am a CFO/CEO/Developer(choose one)")
- [ ] user signup/signin forms
- [ ] blank landing page after signin

### Phase 2: User Controller, API, and basic APIUtil (1.5 days)

**Objective:** Users can be created, read(index/show), updated, and destroyed through the API

- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Users (`UsersController`)
- [ ] jBuilder views for users
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (3 days)

**Objective:** Users can be created, read, edited and destroyed(will I ever want to destroy a user? This would be the equivalent of deleting an account...) with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
  - [ ] route to individual show pages for users
- implement each User component, building out the flux loop as needed.
  - User Index Page
    - [ ] `UsersIndex`
    - [ ] `UserIndexItem`
  - User Show Page
    - [ ] `ProfileInfo`
    - [ ] `AboutDetail`
    - [ ] `QuestionDetail` (this might come later)
    - [ ] `ProfileUpdateForm`


### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Connections (2 day)

**Objective:** Users can send and receive "connection" requests and when there is mutual interest, a match is formed. Users can visit their "Matches" page to view matches as well as sent/received requests.

- [ ] Implement the Connections components:
  - Connections Index
    - [ ] `ConnectionIndexItem`
    - [ ] `SentItem`
    - [ ] `ReceivedItem`
- Use CSS to style new views

### Phase 6: Questions Tab on UserPage (1.5 days)

**Objective:** Users can fill out a short questionnaire that is visible on their show page.

- [ ] add QuestionDetail component to UserPage
- [ ] show the current_user's answers inline
- [ ] Style new elements

### Phase 7: Styling Cleanup and Seeding (2 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Phase 8: FilterBar Component (1 day)

**objective:** Add a FilterBar component on the UsersIndex page that allows a user to filter the index results

- [ ] Implement FilterBar and FilterBarItem components
- [ ] Style new elements


### Bonus Features (TBD)
- [ ] View a map with pins of all other potential "connections", showing a link to their profile on hover
- [ ] Send/receive messages with other users (expected, non-MVP)
- [ ] Pagination / infinite scroll for Users Index


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

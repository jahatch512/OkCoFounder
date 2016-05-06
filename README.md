# OkCoFounder

[Heroku link][heroku]

[heroku]: https://okcofounder.herokuapp.com/

## Minimum Viable Product

OkCoFounder is a web application inspired by OkCupid that will be built using Ruby on Rails and React.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login
- [x] Guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an OkCupid-inspired site: browse potential matches (index), view a specific profile (with "About" and "Q&A" sections), answer scrolling questions on user index page, select to "connect" with another user, view all connections.
- [x] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

OkCoFounder will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out
- [x] Guest/Demo User (MVP)
- [x] Browse an index of other users (MVP)
- [x] Visit the profile page of another user ("About" and "Q&A") (MVP)
- [x] Answer scrolling questions on the UserIndex page while you browse (MVP)



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

- [x] create `User` model
- [x] create `User` Controller
- [x] authentication
- [x] pre-sign up page ("I am a CFO/CEO/Developer(choose one)")
- [x] user signup/signin forms
- [x] blank landing page after signin

### Phase 2: User API and basic APIUtil (1.5 days)

**Objective:** Users can be read(index/show) and updated through the API

- [x] seed the database with a small amount of test data
- [x] jBuilder views for users
- [x] setup Webpack & Flux scaffold
- [x] setup `User` Store
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (3 days)

**Objective:** Can view an index of all the users and click on one to visit the individual show page, revealing all of their profile information, through the user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
  - [x] route to individual show pages for users
- implement each User component, building out the flux loop as needed.
  - User Index Page
    - [x] `UsersIndex`
    - [x] `UserIndexItem`
  - User Show Page
    - [x] `ProfileInfo`
    - [x] `AboutDetail`
    - [x] `QuestionDetail` (this might come later)



### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Questions Tab on UserPage (2 days)

**Objective:** Users can fill out a short questionnaire that is visible on their show page.

- [x] add `QuestionDetail` component to UserPage
- [x] add `Question` Component on UserIndex page
      -- scrolling questions
- [x] display a "match" % based on answered questions
- [x] Style new elements

### Phase 6: Connections (2 day)

**Objective:** Users can send and receive "connection" requests and when there is mutual interest, a match is formed. Users can visit their "Matches" page to view matches as well as sent/received requests.

- [ ] Implement the Connections components:
  - Connections Index
    - [ ] `ConnectionIndexItem`
    - [ ] `SentItem`
    - [ ] `ReceivedItem`
- Use CSS to style new views


### Phase 7: Styling Cleanup and Seeding (2 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

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

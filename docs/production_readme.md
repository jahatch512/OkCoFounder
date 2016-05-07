# OkCoFounder

[OkCoFounder Site][heroku] **NB:** This should be a link to your production site

[heroku]: https://okcofounder.herokuapp.com/

OkCoFounder is a full-stack web application based on the features and functionality of the dating app OkCupid. It utilizes Ruby on Rails with a PosgreSQL database on the backend, and implements React.js within a Flux architecture pattern on the frontend. Using these tools, the site allows a user to create an account and answer a scrolling index of questions in order to determine his/her compatibility with other entrepreneurs looking for business partners in the Bay Area.

## Design & Implementation

Below are some of the implementation details and code snippets from some of the more challenging, creative, and unique aspects of the application.

### User Authentication

One of the most important aspects of any web application is security. When a user creates a new account, BCrypt is implemented on the backend to hash the password before storing it in a user table as a password digest. At the time of login, an API call is made to the Session Controller on the backend to start a new session. If the username and password are a match, the user is assigned a session token on the backend that corresponds to the Rails session hash and shares a connection with the user through the Cookies. Once the connection is established, the current user's information is passed to the Session Store where it is saved to localStorage so that the frontend can access the user information throughout the length of the session. An API call is made in the background on each re-render to ensure the user still has a valid session in Rails, and promptly alerts localStorage to reset if no valid session is found. In this way, the current user can experience seamless and fluid browsing of the site until the session is destroyed (via logout) or the session token fails to match (deleted Cookies).


### Single Page Application

OkCoFounder is a single page application that uses the properties of React and React Router to deliver all content on a single static page. All communication with the backend happens through API ajax requests.



```javascript
    var RouterComponent = (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashPage}/>
        <Route path="users" component={UsersIndex}>
          <Route path="about" component={AboutForm}/>
        </Route>
        <Route path="users/profile" component={ProfilePage} />
        <Route path="users/:userId" component={UserPage} />

      </Route>
    </Router>
    );


    document.addEventListener('DOMContentLoaded', function(){
    Modal.setAppElement('#root');
    var root = document.getElementById('root');
    ReactDOM.render(RouterComponent, root);
    });
  ```

### Browsing an index of other users

  Being that the site aims to connect people with potential business partners, the main components of the site are the users themselves.

  In the database, users are stored in a table containing columns for `username`, `password_digest`, `session_token`, `title` (CEO, CFO, MBA, DEVELOPER), `zipcode`, `age`, and `image_url` where a profile picture can be stored using Cloudinary. Along with this information, extended data about the users is stored in an "about" table. This information includes a `summary`, `current_work`, and `previous_experience`. Users are prompted to fill in this data by a modal that appears upon successful creation of a new account:


![image of about me modal](https://github.com/jahatch512/OkCoFounder/blob/master/docs/logos/aboutMeModal.png)

### Matches and Match Percentage

The most important feature of this application is the ability to find a compatible business partner. In order to determine compatibility, a user answers a long list of questions that are present on the side of the screen as he/she browses the other users (potential matches). This data is stored on a "responses" table, which includes the `user_id`, `question_id`, and the `user_answer`. The matching algorithm takes two users and first determines the total number of unique questions that both users have provided an answer for. It then calculates the total number of identical answers from these questions and divides by the first number to get a percentage: (total number of identical answers / total number of identical questions answered). ActiveRecord queries are used on the User model to retrieve this data in just two queries:

```ruby




```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
``

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  

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


![image of about me modal](https://github.com/jahatch512/OkCoFounder/blob/master/docs/sampleImages/aboutMeModal.png)

### Matches and Match Percentage

The most important feature of this application is the ability to find a compatible business partner. In order to determine compatibility, a user answers a long list of questions that are present on the side of the screen as he/she browses the other users (potential matches). This data is stored on a "responses" table, which includes the `user_id`, `question_id`, and the `user_answer`. The matching algorithm takes two users and first determines the total number of unique questions that both users have provided an answer for. It then calculates the total number of identical answers from these questions and divides by the first number to get a percentage: (total number of identical answers / total number of identical questions answered). ActiveRecord queries are used on the User model to retrieve this data in just two queries:

```ruby
  def match_percent_with_current(current_user)
    same_questions_count = Question.joins("LEFT OUTER JOIN responses r1 ON r1.question_id = questions.id")
    .joins("LEFT OUTER JOIN responses AS r2 ON r2.question_id = questions.id")
    .where("r1.user_id = ? AND r2.user_id = ?", self.id, current_user.id).count

    same_answers_count = Question.joins("LEFT OUTER JOIN responses r1 ON r1.question_id = questions.id")
    .joins("LEFT OUTER JOIN responses AS r2 ON r2.question_id = questions.id")
    .where("r1.user_id = ? AND r2.user_id = ? AND r1.user_answer = r2.user_answer", self.id, current_user.id).count

    if same_questions_count > 0
      match_percent = (same_answers_count.to_f / same_questions_count * 100).round(1)
    else
      match_percent = 0
    end

    return match_percent
  end
  ```


### Connections

Another unique feature to this application is the ability to "Connect" with another user. This is analagous to "following" a user on Twitter, in that connections can be uni-directional, and not all connections are mutual. I can select to "connect" with you, but you don't have to "connect" with me. All of the information about each user (about me, match percentages, and sent/received connections) is fetched by an API call as soon as there is a successful login to the site. This is accomplished through the following associations on the user model, which are then used in Jbuilder:

```ruby
has_many :responses
has_one :about

has_many :connections
has_many :sent_connections, through: :connections, source: :lucky_user
has_many :reverse_connections, foreign_key: :lucky_user_id, class_name: "Connection"
has_many :received_connections, through: :reverse_connections, source: :user
```

```json
json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.title user.title
  json.age user.age
  json.zipcode user.zipcode
  json.image_url user.image_url
  json.about user.about

  json.receive_connection_from_current user.received_connection_from(@current_user)
  json.sent_connection_to_current @current_user.received_connection_from(user)

  json.responses user.responses

  json.match user.match_percent_with_current(@current_user)
end
```

### General Functionality

Users can browse an index of other users, who represent potential business connections:

![image of user index page](https://github.com/jahatch512/OkCoFounder/blob/master/docs/sampleImages/userIndex.png)

They can also view a specific profile, which includes the "about me" data as well as any responses the user has recorded for questions:

![image of user index page](https://github.com/jahatch512/OkCoFounder/blob/master/docs/sampleImages/userIndex.png)


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for OkCoFounder are outlined below.

### Browse Connections

Currently, you can select to "Connect" with a user. The next step is to create an index page where you can view sent connections, received connections, and mutual connections.

### Index Filter

Another feature that will be added to OkCoFounder is the ability to narrow your index list of users using some simple filter parameters. For instance, if a user comes to the site and is only looking for CFO's, he/she should be able to select this option from a menu on the side of the index page and filter out all non-matching users. 

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between OkCoFounder users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  

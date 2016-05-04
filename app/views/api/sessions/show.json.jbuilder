json.extract! @user, :id, :username, :title, :age, :zipcode, :image_url
json.about @user.about
json.sent_connections @user.sent_connections, :id
json.received_connections @user.received_connections, :id
json.responses @user.responses
json.unanswered @user.unanswered_questions
json.all_questions @questions, :content

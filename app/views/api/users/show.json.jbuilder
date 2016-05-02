json.extract! @user, :id, :username, :password_digest, :title, :age, :zipcode, :image_url
json.about @user.about
json.sent_connections user.sent_connections
json.received_connections user.received_connections

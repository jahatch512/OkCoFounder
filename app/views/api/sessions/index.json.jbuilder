json.extract! @user, :id, :username,:image_url, :title,
  :zipcode, :age, :about

json.sent_connections @user.sent_connections, :id, :username, :title, :zipcode, :age
json.received_connections @user.received_connections, :id

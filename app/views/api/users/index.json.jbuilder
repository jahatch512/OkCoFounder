json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.title user.title
  json.age user.age
  json.zipcode user.zipcode
  json.image_url user.image_url
  json.about user.about
  #this is a has_many through association, sends back the id of the user who was sent a connection
  json.sent_connections user.sent_connections, :id
  #this is a has_many through association, sends back the id of the user
  json.received_connections user.received_connections, :id

  # json.receive_connection_from_current user.connected_with(current_user)
  # json.sent_connection_to_current current_user.connected_with(user)
end

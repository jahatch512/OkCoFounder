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

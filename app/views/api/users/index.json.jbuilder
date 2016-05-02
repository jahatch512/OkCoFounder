json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.title user.title
  json.age user.age
  json.zipcode user.zipcode
  json.image_url user.image_url
  json.about user.about
  json.sent_connections user.sent_connections
  json.received_connections user.received_connections
  json.mutual_connections user.mutual_connections
end

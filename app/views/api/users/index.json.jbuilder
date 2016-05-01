json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.title user.title
  json.age user.age
  json.zipcode user.zipcode
  json.image_url user.image_url
  json.about user.about
end

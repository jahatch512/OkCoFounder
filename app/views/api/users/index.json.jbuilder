json.array! @users do |user|
  json.username user.username
  json.title user.title
  json.age user.age
  json.zipcode user.zipcode
end

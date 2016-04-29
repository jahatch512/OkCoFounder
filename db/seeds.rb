# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  username: 'JamesHatch',
  password: 'password',
  title: 'CEO',
  age: 25,
  zipcode: 78734,
  image_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/155/medium/James_Hatch.jpg?1457734522"

)

User.create!(
  username: 'GuyHaas',
  password: 'password',
  title: 'CFO',
  age: 24,
  zipcode: 94302,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/165/medium/Guy_Hadas.jpg?1457734189'

)
User.create!(
  username: 'GrantSawyer',
  password: 'password',
  title: 'MBA',
  age: 25,
  zipcode: 95101,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/152/medium/Grant_Sauer.jpg?1457733926'

)
User.create!(
  username: 'HenryLee',
  password: 'password',
  title: 'Developer',
  age: 26,
  zipcode: 78734,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/127/medium/Henry_Li.jpg?1457734280'

)
User.create!(
  username: 'RyanMichael',
  password: 'password',
  title: 'MBA',
  age: 23,
  zipcode: 63105,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/185/medium/Ryan_Jordan.jpg?1457740223'

)

User.create!(
  username: 'AwesomePerson',
  password: 'password',
  title: 'CEO',
  age: 27,
  zipcode: 94102,
  image_url: 'http://images.clipartpanda.com/person-clip-art--person-clipart-8.gif'

)

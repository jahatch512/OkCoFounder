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

About.create!(
  user_id: 1,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 2,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 3,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 4,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 5,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 6,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)

Question.create!(
content: "Would you say you work well on a team?"
)
Question.create!(
  content: "Have you ever worked on a start-up before?"
)
Question.create!(
content: "Can you commit yourself full time to a project?"
)
Question.create!(
  content: "Are you a self-motivating person?"
)
Question.create!(
content: "Do you value teamwork over individual skill?"
)
Question.create!(
content: "Do you think robots will take over most jobs in the US by 2020?"
)
Question.create!(
  content: "Are you willing to re-locate?"
)
Question.create!(
  content: "Do you prefer to work remotely?"
)
Question.create!(
  content: "Are you a morning person?"
)
Question.create!(
content: "Do you believe that AI is the future of business?"
)

5.times do |i|
  Response.create!(
  user_id: i+1,
  question_id: i+1,
  user_answer: "YES"
  )
end

Response.create!(
  user_id: 1,
  question_id: 6,
  user_answer: "NO"
)
Response.create!(
  user_id: 2,
  question_id: 6,
  user_answer: "YES"
)
Response.create!(
  user_id: 3,
  question_id: 6,
  user_answer: "NO"
)
Response.create!(
  user_id: 4,
  question_id: 6,
  user_answer: "YES"
)
Response.create!(
  user_id: 5,
  question_id: 6,
  user_answer: "NO"
)
Response.create!(
  user_id: 1,
  question_id: 7,
  user_answer: "YES"
)

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
  zipcode: 94102,
  image_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/155/medium/James_Hatch.jpg?1457734522"
)
User.create!(
  username: 'ErinAccountant',
  password: 'password',
  title: 'CFO',
  age: 33,
  zipcode: 94130,
  image_url: "http://i2.istockimg.com/file_thumbview_approve/55158098/5/stock-photo-55158098-mature-business-woman-portrait.jpg"
)

User.create!(
  username: 'GuyHaas',
  password: 'password',
  title: 'CFO',
  age: 24,
  zipcode: 94153,
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
  zipcode: 94102,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/127/medium/Henry_Li.jpg?1457734280'
)
User.create!(
  username: 'RyanMichael',
  password: 'password',
  title: 'MBA',
  age: 23,
  zipcode: 94132,
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
User.create!(
  username: 'LisaJohnson',
  password: 'password',
  title: 'Developer',
  age: 24,
  zipcode: 94295,
  image_url: "http://www.neorhino.com/wp-content/uploads/2011/10/business-lady-thinking-300x300.jpg"
  )
User.create!(
  username: 'EricLi',
  password: 'password',
  title: 'CFO',
  age: 22,
  zipcode: 94022,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/173/medium/Eric_Lee.jpg?1457731699'
)
User.create!(
  username: 'Davvvid',
  password: 'password',
  title: 'Developer',
  age: 32,
  zipcode: 94102,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/168/medium/David_Noah.jpg?1457724939'
)
User.create!(
  username: 'BigJoe the CEO',
  password: 'password',
  title: 'CEO',
  age: 27,
  zipcode: 94106,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/181/medium/Joseph_Williams.jpg?1457735699'
)
User.create!(
username: 'The Kyle Aisle',
password: 'password',
title: 'Developer',
age: 35,
zipcode: 95105,
image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/174/medium/Kyle_Costanzo.jpg?1457738369'
)
User.create!(
  username: 'JohnnyBravo',
  password: 'password',
  title: 'CFO',
  age: 35,
  zipcode: 95103,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/187/medium/Jon_Mendelson.jpg?1457735396'
)
User.create!(
  username: 'SarahRose',
  password: 'password',
  title: 'MBA',
  age: 28,
  zipcode: 95103,
  image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdqmWg2Jef866Kff0s9sA1mPzMmYf5VPjxTwScEdyQ06HVOGXASQ'
)
User.create!(
  username: 'HardWorker34',
  password: 'password',
  title: 'CEO',
  age: 28,
  zipcode: 94125,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/175/medium/Sang_Park.jpg?1457740445'
)
User.create!(
  username: 'MrMichael',
  password: 'password',
  title: 'Developer',
  age: 26,
  zipcode: 94229,
  image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/179/medium/Michael_Gloudeman.jpg?1457739490'
)

About.create!(
  user_id: 1,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 2,
  summary: "I grew up in the Bay Area and have always loved the idea of working on a start-up",
  current_work: "At current, I am an accountant at a mid-sized business",
  previous_experience: "I have never been involved in a start-up personally, but I have long taken a side interest in the field."
)
About.create!(
  user_id: 3,
  summary: "As a highly motivated individual, I enjoy setting high goals for myself and working long hours to make them become a reality.",
  current_work: "I work in the finance department of a fortune 500 company overseeing mergers and acquisitions of mid-sized businesses.",
  previous_experience: "I have been working in the finance industry for 6 years now and received my degree in finance from UCLA."
)
About.create!(
  user_id: 4,
  summary: "I have a degree in industrial design from Arizona State University, and an MBA from Harvard Business College. Just moved to the Bay Area and excited about getting in on the ground level of the next big business.",
  current_work: "I am currently running the management department of a manufacturing company located in the East Bay.",
  previous_experience: "With my time at HBC, I have learned the ins and outs of what it takes to run a business on a day-to-day basis."
)
About.create!(
  user_id: 5,
  summary: "My name is Henry and I am a software developer eager to get his hands in the start-up game. I am flexible with hours and duties.",
  current_work: "I am a web developer at Google. I work in the emerging products division.",
  previous_experience: "I have 10+ years of experience developing in a broad range of languages including: Ruby, JavaScript, Rails, SQL, Flux, and React."
)
About.create!(
  user_id: 6,
  summary: "I have a degree in biochemical engineering from St. Louis College, and an MBA from Harvard Business College. Just moved to the Bay Area and excited about getting in on the ground level of the next big business.",
  current_work: "I am currently running the management department of a manufacturing company located in the East Bay.",
  previous_experience: "With my time at HBC, I have learned the ins and outs of what it takes to run a business on a day-to-day basis."
)
About.create!(
  user_id: 7,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 8,
  summary: "My name is Lisa and I am a software developer eager to get her hands in the start-up game. I am flexible with hours and duties, and can start immediately.",
  current_work: "I am a web developer at Google. I work in the emerging products division.",
  previous_experience: "I have 10+ years of experience developing in a broad range of languages including: Ruby, JavaScript, Rails, SQL, Flux, and React."
)
About.create!(
  user_id: 9,
  summary: "As a highly motivated and extremely passionate individual, I enjoy setting high goals for myself and working long hours to make them become a reality.",
  current_work: "I work in the finance department of a fortune 500 company overseeing mergers and acquisitions of mid-sized businesses.",
  previous_experience: "I have been working in the finance industry for 6 years now and received my degree in finance from UCLA."
)
About.create!(
  user_id: 10,
  summary: "I am a web designer born and raised in San Francisco. After a few years for big companies, I am ready to try my hand at start-ups. I am flexible with hours and duties, and can start immediately.",
  current_work: "I am a web developer at LinkedIn working in the customer satisfaction division.",
  previous_experience: "I have 10+ years of experience developing in a broad range of languages including: Ruby, JavaScript, Rails, SQL, Flux, and React."
)
About.create!(
  user_id: 11,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 12,
  summary: "I am a backend engineer from San Jose. In my free time I enjoy a good book or a cup of coffee and a guitar.",
  current_work: "I have been working as a database admin for a small business for 3 years.",
  previous_experience: "I have significant experience developing backend architecture, mostly in SQL."
)
About.create!(
  user_id: 13,
  summary: "I am a financial adviser who has been involved with numerous start-ups in the past. I am also a die-hard San Jose Sharks fan!",
  current_work: "I do financial planning for pention fund assets for San Francisco Municipal employees.",
  previous_experience: "I have been a part of the development of multiple successful start-ups. GO SHARKS!"
)
About.create!(
  user_id: 14,
  summary: "I am from the Sacramento area and I obtained my MBA from UCLA. Just moved to the Bay Area and excited about getting in on the ground level of the next big business.",
  current_work: "I am currently running the management department of a large department store located in the East Bay.",
  previous_experience: "With my time at UCLA, I have learned the ins and outs of what it takes to run a business on a day-to-day basis."
)
About.create!(
  user_id: 15,
  summary: "I am a hardworking entrepreneur looking for some highly motivated individuals that are interested in joining my team",
  current_work: "At current, I am working at a small venture capital firm, helping to assess risk and assets.",
  previous_experience: "I have over 7 years of experience in the start-up industry. I have worked on ground level teams and assessed start-ups from a venture capital perspective"
)
About.create!(
  user_id: 16,
  summary: "My name is Henry and I am a software developer eager to get his hands in the start-up game. I am flexible with hours and duties.",
  current_work: "I am a web developer at Google. I work in the emerging products division.",
  previous_experience: "I have 10+ years of experience developing in a broad range of languages including: Ruby, JavaScript, Rails, SQL, Flux, and React."
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
Question.create!(
  content: "Have you been living in San Francisco for more than 5 years?"
)
Question.create!(
  content: "Is your commute longer than 1 hour to get to the Financial District?"
)
Question.create!(
  content: "Have you ever owned your own business?"
)
Question.create!(
  content: "Do you have aspirations to be an entrepreneur?"
)
Question.create!(
  content: "Have you ever worked for a fortune 500 company?"
)
Question.create!(
  content: "Do you have experience in a managerial role?"
)
Question.create!(
  content: "Have you ever contributed to an open-source project?"
)
Question.create!(
  content: "Have you been at your current job for more than 2 years?"
)
Question.create!(
  content: "Are you able to work on weekends?"
)
Question.create!(
  content: "Do you expect to be an equal partner of any company you join?"
)

15.times do |i|
  if i == 6
    next
  end
  20.times do |i2|
    num = rand(2)
    answer = num == 0 ? 'YES' : 'NO'
    Response.create!(
      user_id: i+1,
      question_id: i2+1,
      user_answer: answer
    )
  end
end


# Response.create!(
#   user_id: 1,
#   question_id: 6,
#   user_answer: "NO"
# )
# Response.create!(
#   user_id: 2,
#   question_id: 6,
#   user_answer: "YES"
# )
# Response.create!(
#   user_id: 3,
#   question_id: 6,
#   user_answer: "NO"
# )
# Response.create!(
#   user_id: 4,
#   question_id: 6,
#   user_answer: "YES"
# )
# Response.create!(
#   user_id: 5,
#   question_id: 6,
#   user_answer: "NO"
# )
# Response.create!(
#   user_id: 1,
#   question_id: 7,
#   user_answer: "YES"
# )

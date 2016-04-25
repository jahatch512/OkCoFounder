# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
title           | string    | not null
location        | string    | not null
about           | text      | not null
image_url       | string    | not null




## Matches

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
matcher_id      | string    | not null, foreign key (references users), indexed
matchee_id      | string    | not null, foreign key (references users), indexed


## likes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
liker_id        | string    | not null, foreign key (references users), indexed
likee_id        | string    | not null, foreign key (references users), indexed


## questions

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null


## answers

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key (references questions)
content         | string    | not null

## user_answer_choices

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
answer_id       | string    | not null, foreign key (references answers)

## messages

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key (references users)
receiver_id     | integer   | not null, foreign key (references users)
body            | string    | not null

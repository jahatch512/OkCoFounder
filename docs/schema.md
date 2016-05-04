# Schema Information


## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed
title           | string    | not null
zipcode         | integer   | not null
age             | integer   | not null
image_url       | string    |


## abouts

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
summary         | text      |
previous_exp    | text      |
current_work    | text      |


## connections

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | string    | not null, foreign key (references users), indexed
lucky_user_id   | string    | not null, foreign key (references users), indexed


## questions

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null


## responses

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
question_id     | integer   | not null, foreign key (references questions)
user_answer          | string    | not null, foreign key (references answers)

## messages

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key (references users)
receiver_id     | integer   | not null, foreign key (references users)
body            | string    | not null
time            | string    | not null

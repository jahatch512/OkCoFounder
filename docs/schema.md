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
connection_id   | integer   | not null, foreign key (references users)

** BONUS OPTIONAL ITEMS **
sent_id         | integer   | not null, foreign key (references users)
received_id     | integer   | not null, foreign key (references users)
hours_question  | text      | not null
question_two    | text      | not null
question_three  | text      | not null

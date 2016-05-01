json.extract! @user, :id, :username, :password_digest, :title, :age, :zipcode, :image_url
json.about @user.about

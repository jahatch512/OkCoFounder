class Connection < ActiveRecord::Base
  validates :user_id, uniqueness: {scope: :lucky_user_id}

  belongs_to :user

  belongs_to(
    :lucky_user,
    primary_key: :id,
    foreign_key: :lucky_user_id,
    class_name: "User"
  )

end

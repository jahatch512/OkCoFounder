class Response < ActiveRecord::Base
  validates :user_id, :question_id, :user_answer, presence: true
  validates :user_id, uniqueness: {scope: :question_id}


  belongs_to :user
end

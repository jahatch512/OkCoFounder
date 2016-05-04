class Question < ActiveRecord::Base
  validates :content, presence: true 
end

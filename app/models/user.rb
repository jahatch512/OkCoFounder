# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  title           :string           not null
#  zipcode         :integer          not null
#  age             :integer          not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  has_many :responses
  has_one :about

  has_many :connections
  has_many :sent_connections, through: :connections, source: :lucky_user
  has_many :reverse_connections, foreign_key: :lucky_user_id, class_name: "Connection"
  has_many :received_connections, through: :reverse_connections, source: :user

  validates :password_digest, :username, :session_token, :title, :age, :zipcode, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def received_connection_from(other_user)
    other_user.sent_connections.to_a.include?(self)
  end

  def unanswered_questions
    answered = self.answered_questions
    @unanswered = Question.where.not(id: answered)
  end

  def answered_questions
    @answered = Question.joins("LEFT OUTER JOIN responses ON responses.question_id = questions.id")
    .where("responses.user_id = ?", self.id).distinct.pluck(:id)
  end

  def match_percent_with_current(current_user)
    same_questions_count = Question.joins("LEFT OUTER JOIN responses r1 ON r1.question_id = questions.id")
    .joins("LEFT OUTER JOIN responses AS r2 ON r2.question_id = questions.id")
    .where("r1.user_id = ? AND r2.user_id = ?", self.id, current_user.id).count

    same_answers_count = Question.joins("LEFT OUTER JOIN responses r1 ON r1.question_id = questions.id")
    .joins("LEFT OUTER JOIN responses AS r2 ON r2.question_id = questions.id")
    .where("r1.user_id = ? AND r2.user_id = ? AND r1.user_answer = r2.user_answer", self.id, current_user.id).count

    if same_questions_count > 0
      match_percent = (same_answers_count.to_f / same_questions_count * 100).round(1)
    else
      match_percent = 0
    end

    return match_percent
  end



  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

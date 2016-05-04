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
    # @unaswered = Question.joins("LEFT OUTER JOIN responses ON responses.question_id = questions.id")
    # .where.not("responses.user_id = ?", self.id).distinct
    answered = Question.joins("LEFT OUTER JOIN responses ON responses.question_id = questions.id")
    .where("responses.user_id = ?", self.id).distinct.pluck(:id)
    @unanswered = Question.where.not(id: answered)

  end

  def answered_questions
    @answered = Question.joins("LEFT OUTER JOIN responses ON responses.question_id = questions.id")
    .where("responses.user_id = ?", self.id).distinct.pluck(:id)
  end
  #select * from quetsions where not exists(select question ID from responses where user.id = self.id )

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

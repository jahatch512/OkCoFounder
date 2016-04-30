# == Schema Information
#
# Table name: abouts
#
#  id                  :integer          not null, primary key
#  user_id             :integer          not null
#  summary             :text
#  previous_experience :text
#  current_work        :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'test_helper'

class AboutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

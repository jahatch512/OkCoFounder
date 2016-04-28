# json.array! (@user.errors.full_messages) do |message|
#   json.message message
# end

json.errors @user.errors.full_messages

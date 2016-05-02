class Api::ConnectionsController < ApplicationController
  def create
  @connection = Connection.new(connection_params)

  if(@connection.save)
    render json: @connection, status: 200
  else
    @errors = @connection.errors.full_messages
    render "api/connections/error", status: 422
  end
  end

  def destroy
    @connection = Connection.find_by(connection_params)

    if(@connection.destroy)
      render json: @connection, status: 200
    else
      @errors = connection.errors.full_messages
      render "api/connections/error", status: 422
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:user_id, :lucky_user_id)
  end
end

class Api::ConnectionsController < ApplicationController
  def create
  @connection = Connection.new(connection_params)

  if(@connection.save)
    render :show, status: 200
  else
    @errors = @connection.errors.full_messages
    render json: @errors, status: 422
  end
  end

  def destroy
    @connection = Connection.find_by(user_id: connection_params[:user_id], lucky_user_id: connection_params[:lucky_user_id])

    if(@connection.destroy)
      render :show, status: 200
    else
      @errors = connection.errors.full_messages
      render json: @errors, status: 422
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:user_id, :lucky_user_id)
  end
end

class Api::ConnectionsController < ApplicationController
  def create
  @connection = Connection.new(connection_params)

  if(@connection.save)
    render @connection, status: 200
  else
    @errors = connection.errors.full_messages
    render "api/connections/error", status: 422
  end
  end

  def destroy
    @connection = Connection.find_by(connection_params)

    if(@connection.destroy)
      render @connection, status: 200
    else
      @errors = connection.errors.full_messages
      render "api/connections/error", status: 422
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:connector_id, :connectee_id)
  end
end

class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user.nil?
      render json: {message: 'Invalid Username and/or Password'}, status: 422
    else
      login_user!(@user)
      render :index
    end

  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    logout_user!
    render json: {message: "destroy successful"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :title, :zipcode, :age, :image_url)
  end
end

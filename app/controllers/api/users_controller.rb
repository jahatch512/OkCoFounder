class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save!
      login_user!(@user)
      render :create
    else
      render :errors
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render :errors
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :title, :age, :zipcode, :image_url)
  end
end

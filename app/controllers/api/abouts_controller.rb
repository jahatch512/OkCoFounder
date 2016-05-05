class Api::AboutsController < ApplicationController

  def create
    @about = About.new(about_params)
    if @about.save
      render json: @about
    else
      render json: {message: "error in saving about info to database"}
    end
  end

  def update
    @about = About.find_by(user_id: params[:about][:user_id])
    if @about.update_attributes(about_params)
      render json: @about
    else
      render json: {message: "error updating about information"}
    end
  end

  def show
    @about = About.find_by(user_id: params[:user_id])
    render json: @about
  end

  private

  def about_params
    params.require(:about).permit(:user_id, :summary, :previous_experience, :current_work)
  end
end

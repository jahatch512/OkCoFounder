class Api::ResponsesController < ApplicationController
  def create
    @response = Response.new(response_params)
    if @response.save
      @question = Question.find_by(id: @response.question_id)
      render json: {response: @response, question: @question}
    else
      render json: {message: "error in saving response info to database"}
    end
  end

  def response_params
    params.require(:response).permit(:user_id, :question_id, :user_answer)
  end

end

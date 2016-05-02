Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :abouts, only: [:create, :show, :update, :destroy]
  end

end

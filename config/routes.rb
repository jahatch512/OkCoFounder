Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :abouts, only: [:create, :show, :destroy]
    resource :abouts, only: [:update]
    resource :connections, only: [:create, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :questions, only: [:index, :show]
    resources :responses, only: [:create, :destroy, :index, :show]
  end

end

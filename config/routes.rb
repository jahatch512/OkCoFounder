Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :abouts, only: [:create, :show, :update, :destroy]
    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end

end

Rails.application.routes.draw do
  resources :wishlist_breweries
  resources :breweries
  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }

  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end

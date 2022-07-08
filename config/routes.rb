Rails.application.routes.draw do
  resources :wishlist_breweries
  resources :breweries do 
    resources :reviews
  end

  get '/brewery_exists', to: 'breweries#brewery_exists'

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end

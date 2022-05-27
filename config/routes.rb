Rails.application.routes.draw do
  # resources :reviews
  resources :wishlist_breweries
  resources :breweries do 
    resources :reviews
  end

  # resources :users
  # devise_for :users, controllers: {
  #       sessions: 'users/sessions'
  #     }

  #from this blog: https://abletech.nz/resource/hi-im-kate/
  # root :to => 'home#index'
  # devise_for :users
  # , controllers: { registrations: 'registrations', sessions: 'sessions' }

  # devise_for :users 
  # path: '', path_names: {
  #   sign_in: 'sign_in',
  #   sign_out: 'logout',
  #   registration: 'signup'
  # },
  # controllers: {
  #   sessions: 'users/sessions',
  #   registrations: 'users/registrations'
  # }

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

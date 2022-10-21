Rails.application.routes.draw do
  resources :guests
  resources :bnbs
  resources :reservations
  resources :reviews
  resources :sessions
  patch '/reviews/:id', to: 'reviews#update'
  delete '/sessions', to: 'sessions#destroy'
  get '/bnb_reviews/:id', to: 'reviews#bnb_reviews'
  get '/guest_reservations/:id', to: 'reservations#guest_reservations'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

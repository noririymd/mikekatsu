Rails.application.routes.draw do
  devise_for :users
  root to: "portfolios#index"
  resources :portfolios
end

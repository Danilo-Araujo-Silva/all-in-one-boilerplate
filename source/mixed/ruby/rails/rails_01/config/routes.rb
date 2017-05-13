Rails.application.routes.draw do
  root to: 'public/public#landing'

  get 'about', to: 'public/public#about'
  get 'careers', to: 'public/public#careers'
  get 'contact', to: 'public/public#contact'
  get 'frequently_asked_questions', to: 'public/public#frequently_asked_questions'
  get 'help', to: 'public/public#help'
  get 'landing', to: 'public/public#landing'
  get 'privacy_policy', to: 'public/public#privacy_policy'
  get 'sitemap', to: 'public/public#sitemap'
  get 'terms_of_service', to: 'public/public#terms_of_service'
  get 'error/not_found', to: 'public/error#not_found'

  namespace :administration do
    root to: 'administration#dashboard'
    get 'dashboard', to: redirect('/administration')
  end

  namespace :development do
    root to: 'development#dashboard'
    get 'dashboard', to: redirect('/development')
    resources :users
  end

  namespace :user do
    root to: 'user#dashboard'
    get 'dashboard', to: redirect('/user')
  end

  # namespace :webservice do
  # end

  devise_scope :user do
    get '/create_account' => 'devise/registrations#new', as: 'new_user_registration' # custom path to sign_up/registration
  end

  devise_for :user,
    :controllers => {
      :confirmations => 'user/devise/confirmations',
      :omniauth_callbacks => 'user/devise/omniauth_callbacks',
      :passwords => 'user/devise/passwords',
      :registrations => 'user/devise/registrations',
      :sessions => 'user/devise/sessions',
      :unlocks => 'user/devise/unlocks'
    }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class User::Devise::DeviseController < ApplicationController
  before_action :post_initialize

  layout 'subsystem/public'

  protected

  def post_initialize
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :name])
  end
end

class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  before_action :validate_permission

  def validate_permission
    redirect_to error_not_found_url unless permited?
  end

  def permited?
    return true if devise_controller?

    raise NoMethodError, "The controller '#{request.controller_class}' must override the method '#{__method__}'."
  end
end


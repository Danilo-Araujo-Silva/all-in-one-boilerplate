class User::MainController < ApplicationController

  layout 'subsystem/user'

  def permited?
    authenticate_user!

    true
  end
end
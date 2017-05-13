class Development::MainController < ApplicationController

  layout 'subsystem/development'

  def permited?
    authenticate_user!

    true
  end
end
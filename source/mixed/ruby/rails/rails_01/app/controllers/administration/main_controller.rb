class Administration::MainController < ApplicationController

  layout 'subsystem/administration'

  def permited?
    authenticate_user!

    true
  end
end
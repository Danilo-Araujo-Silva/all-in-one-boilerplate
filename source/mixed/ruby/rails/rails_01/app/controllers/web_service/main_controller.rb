class WebService::MainController < ApplicationController

  layout 'subsystem/webservice'

  def permited?
    authenticate_user!

    true
  end
end
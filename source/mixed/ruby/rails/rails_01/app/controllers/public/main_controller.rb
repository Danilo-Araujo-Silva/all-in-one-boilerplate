class Public::MainController < ApplicationController

  layout 'subsystem/public'

  def permited?
    true
  end
end
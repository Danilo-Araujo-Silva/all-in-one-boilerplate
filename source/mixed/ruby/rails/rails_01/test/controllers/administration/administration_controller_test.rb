require 'test_helper'

class AdministrationControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    skip('A loggin mechanism should be implemented first.')

    get administration_dashboard_url
    assert_response :success
  end

end

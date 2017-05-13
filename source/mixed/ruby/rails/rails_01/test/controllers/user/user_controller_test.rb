require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    skip('A loggin mechanism should be implemented first.')

    get user_dashboard_url
    assert_response :success
  end

end

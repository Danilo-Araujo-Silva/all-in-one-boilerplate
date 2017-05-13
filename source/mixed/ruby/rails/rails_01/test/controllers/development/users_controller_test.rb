require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    skip('A loggin mechanism should be implemented first.')

    get users_url
    assert_response :success
  end

  test "should get new" do
    skip('A loggin mechanism should be implemented first.')

    get new_user_url
    assert_response :success
  end

  test "should create user" do
    skip('A loggin mechanism should be implemented first.')

    assert_difference('User.count') do
      post users_url, params: { user: { email: @user.email, encrypted_password: @user.encrypted_password, name: @user.name, username: @user.username } }
    end

    assert_redirected_to user_url(User.last)
  end

  test "should show user" do
    skip('A loggin mechanism should be implemented first.')

    get user_url(@user)
    assert_response :success
  end

  test "should get edit" do
    skip('A loggin mechanism should be implemented first.')

    get edit_user_url(@user)
    assert_response :success
  end

  test "should update user" do
    skip('A loggin mechanism should be implemented first.')

    patch user_url(@user), params: { user: { email: @user.email, encrypted_password: @user.encrypted_password, name: @user.name, username: @user.username } }
    assert_redirected_to user_url(@user)
  end

  test "should destroy user" do
    skip('A loggin mechanism should be implemented first.')

    assert_difference('User.count', -1) do
      delete user_url(@user)
    end

    assert_redirected_to users_url
  end
end

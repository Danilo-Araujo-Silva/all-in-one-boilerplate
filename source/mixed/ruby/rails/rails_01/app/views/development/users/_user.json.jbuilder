json.extract! user, :id, :username, :name, :email, :encrypted_password, :created_at, :updated_at
json.url user_url(user, format: :json)

class User < ApplicationRecord
  validates :username, presence: { message: 'cannot be empty.' }, allow_blank: false
  validates :name, presence: { message: 'cannot be empty.'}, allow_blank: false
  validates :email, presence: { message: 'cannot be empty.' }, allow_blank: false
  validates_email_format_of :email, { message: 'invalid.' }
  validates :email, uniqueness: { message: 'has already been taken.' }
  validates :encrypted_password, presence: { message: "cannot be empty." }

  devise :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable,
    :confirmable,
    :lockable,
    :timeoutable,
    :omniauthable,
    :omniauth_providers => [
      :github,
      :google_oauth2,
      :facebook,
      :linkedin,
      :twitter
    ]

  def self.main_users
    if defined? @@main_users
      return @@main_users
    end

    # Special treatment when the seed task is running.
    if !User.find_by_username('root')
      root = User.new
      root.id = 1
      @@main_users = {
        root: root
      }
    else
      @@main_users ||= {
        root: User.find_by_username('root'),
        developer: User.find_by_username('developer'),
        administrator: User.find_by_username('administrator'),
        user: User.find_by_username('user'),
        public: User.find_by_username('public')
      }.deep_freeze
    end

    @@main_users
  end

  def main_users
    @@main_users
  end

  def _validate
    super
  end

  def _sanitize
    super

    # If is the root user or created by the root user then the confirmation need to be explicit.
    self.confirm if (
      User.main_users and (
        self.id == User.main_users[:root].id or
        self.created_by_id == User.main_users[:root].id
      )
    )

    self.email = self.email.strip.downcase
    self.username = self.email if self.username.nil?
    self.username = self.username.strip.downcase
    self.name.strip!
  end

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(:email => data["email"]).first

    unless user
      password = Devise.friendly_token[0,20]

      ActiveRecord::Base.transaction do
        user = User.new(
          username: data['email'],
          name: data['name'],
          email: data['email'],
          password: password,
          password_confirmation: password,
          created_by_id: User.main_users[:user].id,
          updated_by_id: User.main_users[:user].id
        )

        user.save!

        user_group = UserGroup.new(
          user_id: user.id,
          group_id: Group.main_groups[:user].id,
          grant: '',
          created_by_id: User.main_users[:user].id,
          updated_by_id: User.main_users[:user].id
        )

        user_group.save!
      end
    end

    user
  end

end

class AddDeviseToUsers < ActiveRecord::Migration[5.0]
  def self.up
    change_table :users do |t|
      ## Database authenticatable
      # t.string :email, null: false, default: "", comment: "E-mail of the user."
      t.string :encrypted_password, null: false, default: '', comment: "Encrypted password of the user."

      ## Recoverable
      t.string   :reset_password_token, comment: 'Token to reset the password.'
      t.datetime :reset_password_sent_at, comment: 'Datetime when the password reset token was sent.'

      ## Rememberable
      t.datetime :remember_created_at, comment: 'Datetime when the remember cookie was created.'

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false, comment: 'Counter of how many times an user signed in.'
      t.datetime :current_sign_in_at, comment: "Datetime of the user current sign in."
      t.datetime :last_sign_in_at, comment: "Datetime of the user last sign in."
      t.string   :current_sign_in_ip, comment: "IP of the user current sign in."
      t.string   :last_sign_in_ip, comment: "IP of the user last sign in."

      ## Confirmable
      t.string   :confirmation_token, comment: "Token to confirm the account."
      t.datetime :confirmed_at, comment: 'Datetime when the account was confirmed.'
      t.datetime :confirmation_sent_at, comment: 'Datetime when the confirmation message was sent.'
      t.string   :unconfirmed_email, comment: "E-mail of the user to be confirmed, when changing the e-mail." # Only if using reconfirmable

      ## Lockable
      t.integer  :failed_attempts, default: 0, null: false, comment: 'Counter of how many times an user failed to sign in.' # Only if lock strategy is :failed_attempts
      t.string   :unlock_token, comment: "Token to unlock the account if it's locked." # Only if unlock strategy is :email or :both
      t.datetime :locked_at, comment: 'Datetime when the account was locked.'

      ## Omniauth
      t.string :provider, comment: 'Provider for omniauth authentication. Ex.: github.'
      t.string :uid, comment: "UID of the user on the provider."


      # Uncomment below if timestamps were not included in your original model.
      # t.timestamps null: false
    end

    # add_index :users, :email, unique: true, comment: "The e-mail of the user should be unique."
    add_index :users, :reset_password_token, unique: true, comment: "The reset password token should be unique."
    add_index :users, :confirmation_token, unique: true, comment: "The confirmation token should be unique."
    add_index :users, :unlock_token, unique: true, comment: "The unlock token should be unique."
    add_index :users, [:provider, :uid], unique: true, comment: "The UID of the user on a provider should be unique."
  end

  def self.down
    # By default, we don't want to make any assumption about how to roll back a migration when your
    # model already existed. Please edit below which fields you would like to remove in this migration.
    raise ActiveRecord::IrreversibleMigration
  end
end

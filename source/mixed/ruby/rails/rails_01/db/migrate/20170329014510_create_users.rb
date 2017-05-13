class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true, comment: "Username/nickname of the user."
      t.string :name, null: false, index: true, comment: "Full name of the user."
      t.string :email, null: false, unique: true, index: true, comment: "Main e-mail of the user."

      t.integer :created_by_id, null: false, comment: "Id of the user who created the record."
      t.integer :updated_by_id, null: false, comment: "Id of the user who did the last change in the record."

      t.timestamps
    end
  end
end

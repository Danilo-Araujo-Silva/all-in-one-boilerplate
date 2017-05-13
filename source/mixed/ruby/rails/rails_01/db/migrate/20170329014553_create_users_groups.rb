class CreateUsersGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :users_groups do |t|
      t.references :user, null: false, index: true, foreign_key: true, comment: "Id of the user."
      t.references :group, null: false, index: true, foreign_key: true, comment: "Id of the group."
      t.string :grant, null: false, index: true, comment: "Indicates if the user could grant permissions to others."

      t.integer :created_by_id, null: false, comment: "Id of the user who created the record."
      t.integer :updated_by_id, null: false, comment: "Id of the user who did the last change in the record."

      t.timestamps
    end
  end
end

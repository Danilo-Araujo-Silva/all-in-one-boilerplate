class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.integer :parent_id, null: true, index: true, comment: "Id of the parent group, if exists."
      t.string :title, null: false, index: true, comment: "Title of the group."
      t.string :description, null: false, comment: "Description of the group."

      t.integer :created_by_id, null: false, comment: "Id of the user who created the record."
      t.integer :updated_by_id, null: false, comment: "Id of the user who did the last change in the record."

      t.timestamps
    end
  end
end

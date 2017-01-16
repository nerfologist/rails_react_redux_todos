class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :done, null: false, default: false
      t.timestamps
    end
  end
end

class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :user_id, null: false, index: true
      t.integer :question_id, null: false, index: true
      t.string :user_answer, null: false
      t.timestamps null: false
    end
  end
end

class CreateAbouts < ActiveRecord::Migration
  def change
    create_table :abouts do |t|
      t.integer :user_id, null: false, index: true, unique: true
      t.text :summary
      t.text :previous_experience
      t.text :current_work 
      t.timestamps null: false
    end
  end
end

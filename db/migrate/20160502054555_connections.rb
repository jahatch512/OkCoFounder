class Connections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.integer :user_id, null: false, index: true
      t.integer :lucky_user_id, null: false, index: true
      t.timestamps null: false
    end
  end
end

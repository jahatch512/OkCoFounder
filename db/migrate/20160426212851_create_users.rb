class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true
      t.string :title, null: false
      t.integer :zipcode, null: false
      t.integer :age, null: false
      t.string :image_url

      t.timestamps null: false
    end
  end
end

# class CreateConnections < ActiveRecord::Migration
#   def change
#     create_table :connections do |t|
#       t.integer :connector_id, null: false, index: true
#       t.integer :connectee_id, null: false, index: true
#       t.timestamps null: false
#     end
#
#     add_index :connections, [:connector_id, :connectee_id], unique: true
#   end
# end

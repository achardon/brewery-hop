class DropUsers < ActiveRecord::Migration[7.0]
  def change
    drop_table :reviews
  end
end

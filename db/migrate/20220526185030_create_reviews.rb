class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :brewery, null: false, foreign_key: true

      t.timestamps
    end
  end
end

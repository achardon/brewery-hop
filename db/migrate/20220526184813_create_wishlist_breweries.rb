class CreateWishlistBreweries < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlist_breweries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :brewery, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class DropBreweryWishlists < ActiveRecord::Migration[7.0]
  def change
    drop_table :wishlist_breweries
  end
end

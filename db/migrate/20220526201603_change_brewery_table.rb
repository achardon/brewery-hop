class ChangeBreweryTable < ActiveRecord::Migration[7.0]
  def change
    change_table :breweries do |t|
      t.remove :address, :gps_coords
      t.string :street
      t.string :city
      t.string :state
      t.decimal :longitude
      t.decimal :latitude
      t.rename :website, :website_url
    end
  end
end

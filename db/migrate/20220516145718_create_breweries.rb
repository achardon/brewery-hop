class CreateBreweries < ActiveRecord::Migration[7.0]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :address
      t.decimal :gps_coords, array: true, default: []
      t.string :website

      t.timestamps
    end
  end
end

class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :longitude, :latitude, :website_url, :reviews, :users, :wishlist_breweries
end

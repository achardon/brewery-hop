class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :gps_coords, :website, :reviews
end

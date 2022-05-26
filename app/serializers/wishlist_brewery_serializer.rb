class WishlistBrewerySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :brewery
end

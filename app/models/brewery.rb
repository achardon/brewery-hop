class Brewery < ApplicationRecord
has_many :reviews
has_many :wishlist_breweries
validates :name, presence: true

has_many :reviews, dependent: :destroy
has_many :users, through: :wishlist_breweries

end

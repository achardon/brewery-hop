class Brewery < ApplicationRecord
has_many :reviews
validates :name, presence: true

has_many :reviews

end

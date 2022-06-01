class Brewery < ApplicationRecord
has_many :reviews
validates :name, presence: true

has_many :reviews, dependent: :destroy

end

class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user
  has_one :brewery
end
